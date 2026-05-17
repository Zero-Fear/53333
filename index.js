import fs from 'fs';
import antlr4 from 'antlr4';
import MetadataLexer from './generated/MetadataLexer.js';
import MetadataParser from './generated/MetadataParser.js';
import MetadataVisitor from './generated/MetadataVisitor.js';

// 1. Manejo de errores personalizado para mostrar línea y causa
class CustomErrorListener extends antlr4.error.ErrorListener {
    constructor() {
        super();
        this.errores = [];
    }

    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this.errores.push(`Línea ${line}:${column} - Error: ${msg}`);
    }
}

// 4. Visitor para interpretar el árbol y armar el objeto final
class CustomMetadataInterpreter extends MetadataVisitor {
    constructor() {
        super();
        this.datos = {};
    }

    visitMetadata(ctx) {
        if (ctx.campo()) {
            for (let c of ctx.campo()) {
                this.visit(c);
            }
        }
        return this.datos;
    }

    visitCampo(ctx) {
        let nombre = ctx.nombreCampo().getText();
        let valor = this.visit(ctx.valorCampo());
        this.datos[nombre] = valor;
        return null;
    }

    visitValorCampo(ctx) {
        if (ctx.texto()) return ctx.texto().getText();
        if (ctx.numero()) return parseInt(ctx.numero().getText(), 10);
        if (ctx.fecha()) return ctx.fecha().getText();
        if (ctx.listaTextos()) return this.visit(ctx.listaTextos());
        return null;
    }

    visitListaTextos(ctx) {
        let lista = [];
        if (ctx.texto()) {
            for (let t of ctx.texto()) {
                lista.push(t.getText());
            }
        }
        return lista;
    }
}

function main() {
    let input;
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        console.log("No se pudo leer el archivo input.txt");
        return;
    }

    // Configuración inicial de ANTLR
    const inputStream = new antlr4.InputStream(input);
    const lexer = new MetadataLexer(inputStream);
    const tokenStream = new antlr4.CommonTokenStream(lexer);
    const parser = new MetadataParser(tokenStream);

    // Reemplazamos los listeners de error por defecto por el nuestro
    const errorListener = new CustomErrorListener();
    lexer.removeErrorListeners();
    parser.removeErrorListeners();
    lexer.addErrorListener(errorListener);
    parser.addErrorListener(errorListener);

    tokenStream.fill();
    const tree = parser.metadata();

    // PUNTO 1: Mostrar si hay errores o si la entrada es válida
    if (errorListener.errores.length > 0) {
        console.log("Se encontraron errores de sintaxis en la entrada:");
        errorListener.errores.forEach(e => console.log(e));
        return; // Corta la ejecución acá si hay errores
    } else {
        console.log("Entrada válida. Análisis correcto.\n");
    }

    // PUNTO 2: Imprimir la tabla de Lexemas y Tokens
    console.log("--- Tabla de Lexemas-Tokens ---");
    for (let token of tokenStream.tokens) {
        if (token.type !== antlr4.Token.EOF) {
            // Buscamos el nombre del token de forma segura
            const dicc = lexer.symbolicNames || lexer.constructor.symbolicNames || parser.symbolicNames || parser.constructor.symbolicNames || [];
            const nombreToken = dicc[token.type] || `ID_${token.type}`;
            const lexema = token.text.replace(/\r?\n|\r/g, "\\n");
            
            console.log(`${nombreToken} -> ${lexema}`);
        }
    }

    // PUNTO 3: Imprimir el árbol de análisis sintáctico
    console.log("\n--- Árbol de derivación ---");
    console.log(tree.toStringTree(parser.ruleNames));

    // PUNTO 4: Traducción e interpretación a JS
    console.log("\n--- Resultado de la Interpretación ---");
    const interpreter = new CustomMetadataInterpreter();
    const resultadoJS = interpreter.visit(tree);
    
    // Imprimimos el objeto como lo vería un programa real de JavaScript
    console.log("Objeto JavaScript generado:");
    console.log(resultadoJS);
}

main();