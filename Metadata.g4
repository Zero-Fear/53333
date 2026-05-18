grammar Metadata;

//Gramatica
metadata : campo* EOF;
campo : nombreCampo ':' valorCampo finCampo;
nombreCampo :'nombre'
            |'tipo'
            |'tamano'
            |'creado'
            |'modificado'
            |'autor'
            |'descripcion'
            |'etiquetas'
            ;
valorCampo :texto
           |numero
           |fecha
           |listaTextos
           ;
listaTextos : '[' texto (',' texto)* ']';
texto : TEXTO ;
numero : NUMERO ;
fecha : FECHA ; 
finCampo : FIN_CAMPO ;

//Lexemas
FIN_CAMPO : ';' ;
FECHA : DIGITO DIGITO DIGITO DIGITO '-' DIGITO DIGITO '-' DIGITO DIGITO (' ' DIGITO DIGITO ':' DIGITO DIGITO (':' DIGITO DIGITO)?)? ;
NUMERO : DIGITO+ ;
TEXTO : CARACTER+ ;
fragment CARACTER : LETRA | DIGITO | '_' | '-' | '.' | ' ' ;
fragment LETRA : [a-zA-Z] ;
fragment DIGITO : [0-9] ;
WS : [ \t\r\n]+ -> skip ;
