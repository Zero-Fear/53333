## Analizador de Metadatos
Este proyecto es un analizador léxico y sintáctico hecho con ANTLR4 y Node.js. El programa lee un archivo de configuración, valida si la estructura es correcta, muestra la tabla de tokens, el árbol de derivación y hace una interpretación básica de los datos en JavaScript.

## Versiones utilizadas
* **Node.js**: v24.15.0 (o cualquiera superior a v16)
* **NPM**: v10.x
* **Java**: OpenJDK 17.0.19 (Temurin) -> *Nota: Se requirió esta versión ya que el .jar nuevo de ANTLR4 no es compatible con el Java 1.8 base de los apuntes viejos.*
* **ANTLR**: antlr-4.13.2-complete.jar

## Como abrir el proyecto:
Copia el enlace del repositorio y clonalo en tu computadora con el siguiente comando en el cmd(terminal) : 'git clone (enlace del repositorio)' Una vez clonado, abre la carpeta completa del proyecto utilizando VS Code con los comandos : 'cd 53333' luego : 'code .' .

## Cómo ejecutar y probar el proyecto

El analizador se puede probar de dos maneras diferentes según lo que se quiera revisar:

### Opción 1: Ejecución por consola (Script Principal)
Para correr el analizador y ver la tabla de tokens, el árbol de texto y el objeto JavaScript final:

1. El programa busca un archivo llamado input.txt en la raíz. Para probar los distintos ejemplos que dejé, copien el contenido de cualquiera de los archivos de prueba y péguenlo dentro de input.txt.

2. Ejecutar el analizador con el comando:
    ```bash
   node index.js

## Opción 2: Depuración y Árbol Visual (F5 en VS Code)
Para ver el árbol de derivación de forma gráfica interactiva utilizando la extensión de ANTLR4:

1. Abrir el archivo de la gramática Metadata.g4 en el editor (es obligatorio estar visualizando este archivo para que la extensión funcione).

2. Presionar la tecla F5 (o ir a la pestaña de Run and Debug y darle al botón verde de Debug ANTLR4 grammar).

3. Esto leerá el archivo de entrada configurado en el launch.json y abrirá una pestaña a la derecha en Visual Studio Code con el árbol jerárquico visual.

## Archivos de prueba incluidos
**input_correcto_1.txt:** Ejemplo básico que funciona bien.

**input_correcto_2.txt:** Ejemplo más completo con fechas y listas que también funciona.

**input_incorrecto_1.txt:** Rompe porque le saqué un punto y coma al final de una línea (error sintáctico).

**input_incorrecto_2.txt:** Rompe porque usé comillas dobles en un texto, y la gramática no las acepta (error léxico).

## Notas sobre problemas que tuve durante el desarrollo
Dejo anotados los errores que me fueron surgiendo mientras armaba el proyecto y cómo los fui solucionando:

1. Mayúsculas y minúsculas en ANTLR:
Al principio puse los nombres de las reglas sintácticas con mayúscula (como Campo o Metadata). ANTLR se volvía loco porque se pensaba que eran tokens del lexer. Lo solucioné pasando todas las reglas del parser a minúsculas, dejando las mayúsculas solo para los tokens como TEXTO o NUMERO.

2. Problemas con la Ñ y las tildes: 
Quise usar la palabra tamaño y descripción en la gramática, pero Node.js tiraba errores raros de formato (con códigos como \u00C3). Al final decidí sacar las tildes y la Ñ, dejando tamano y descripcion para evitar problemas de codificación.

3. El espacio en blanco después de los dos puntos: 
En la gramática, el espacio forma parte de la regla CARACTER. Si ponía por ejemplo etiquetas: [letra], el analizador se pensaba que el espacio después de los dos puntos era el valor de texto y el corchete rompía todo porque esperaba un punto y coma. La solución fue escribir el archivo de entrada sin espacios de formato pegado a los dos puntos y a las comas.

4. Error con el require (ES Modules): 
Como el proyecto base venía configurado con "type": "module" en el package.json, Node no me dejaba usar require para importar ANTLR en el index.js. Tuve que cambiar todo a la sintaxis moderna de import y ponerle el .js al final a las rutas de la carpeta generated.

5. Cambios en la versión de ANTLR4: 
Al querer armar la tabla de tokens, intenté usar lexer.symbolicNames como decía un ejemplo, pero me decía que no existía (undefined). Al parecer cambia según la versión de la librería, así que armé una línea en JavaScript que busca esa lista en el lexer o en el parser automáticamente para que no falle.