// Generated from c:/Users/ignac/OneDrive/Documentos/Facultad - UTN 1�A�o (2025)/3� Semestre/Sintaxis y Sem�ntica de los Lenguajes/53333/Metadata.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MetadataListener from './MetadataListener.js';
import MetadataVisitor from './MetadataVisitor.js';

const serializedATN = [4,1,17,59,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,5,0,20,8,0,10,0,12,0,23,9,0,1,0,1,0,
1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,3,3,3,38,8,3,1,4,1,4,1,4,1,4,5,
4,44,8,4,10,4,12,4,47,9,4,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,8,0,
0,9,0,2,4,6,8,10,12,14,16,0,1,1,0,2,9,54,0,21,1,0,0,0,2,26,1,0,0,0,4,31,
1,0,0,0,6,37,1,0,0,0,8,39,1,0,0,0,10,50,1,0,0,0,12,52,1,0,0,0,14,54,1,0,
0,0,16,56,1,0,0,0,18,20,3,2,1,0,19,18,1,0,0,0,20,23,1,0,0,0,21,19,1,0,0,
0,21,22,1,0,0,0,22,24,1,0,0,0,23,21,1,0,0,0,24,25,5,0,0,1,25,1,1,0,0,0,26,
27,3,4,2,0,27,28,5,1,0,0,28,29,3,6,3,0,29,30,3,16,8,0,30,3,1,0,0,0,31,32,
7,0,0,0,32,5,1,0,0,0,33,38,3,10,5,0,34,38,3,12,6,0,35,38,3,14,7,0,36,38,
3,8,4,0,37,33,1,0,0,0,37,34,1,0,0,0,37,35,1,0,0,0,37,36,1,0,0,0,38,7,1,0,
0,0,39,40,5,10,0,0,40,45,3,10,5,0,41,42,5,11,0,0,42,44,3,10,5,0,43,41,1,
0,0,0,44,47,1,0,0,0,45,43,1,0,0,0,45,46,1,0,0,0,46,48,1,0,0,0,47,45,1,0,
0,0,48,49,5,12,0,0,49,9,1,0,0,0,50,51,5,16,0,0,51,11,1,0,0,0,52,53,5,15,
0,0,53,13,1,0,0,0,54,55,5,14,0,0,55,15,1,0,0,0,56,57,5,13,0,0,57,17,1,0,
0,0,3,21,37,45];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MetadataParser extends antlr4.Parser {

    static grammarFileName = "Metadata.g4";
    static literalNames = [ null, "':'", "'nombre'", "'tipo'", "'tamano'", 
                            "'creado'", "'modificado'", "'autor'", "'descripcion'", 
                            "'etiquetas'", "'['", "','", "']'", "';'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "FIN_CAMPO", 
                             "FECHA", "NUMERO", "TEXTO", "WS" ];
    static ruleNames = [ "metadata", "campo", "nombreCampo", "valorCampo", 
                         "listaTextos", "texto", "numero", "fecha", "finCampo" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MetadataParser.ruleNames;
        this.literalNames = MetadataParser.literalNames;
        this.symbolicNames = MetadataParser.symbolicNames;
    }



	metadata() {
	    let localctx = new MetadataContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MetadataParser.RULE_metadata);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1020) !== 0)) {
	            this.state = 18;
	            this.campo();
	            this.state = 23;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 24;
	        this.match(MetadataParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	campo() {
	    let localctx = new CampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MetadataParser.RULE_campo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.nombreCampo();
	        this.state = 27;
	        this.match(MetadataParser.T__0);
	        this.state = 28;
	        this.valorCampo();
	        this.state = 29;
	        this.finCampo();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombreCampo() {
	    let localctx = new NombreCampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MetadataParser.RULE_nombreCampo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1020) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valorCampo() {
	    let localctx = new ValorCampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MetadataParser.RULE_valorCampo);
	    try {
	        this.state = 37;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 33;
	            this.texto();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 34;
	            this.numero();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 35;
	            this.fecha();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 36;
	            this.listaTextos();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	listaTextos() {
	    let localctx = new ListaTextosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MetadataParser.RULE_listaTextos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.match(MetadataParser.T__9);
	        this.state = 40;
	        this.texto();
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===11) {
	            this.state = 41;
	            this.match(MetadataParser.T__10);
	            this.state = 42;
	            this.texto();
	            this.state = 47;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 48;
	        this.match(MetadataParser.T__11);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	texto() {
	    let localctx = new TextoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MetadataParser.RULE_texto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(MetadataParser.TEXTO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MetadataParser.RULE_numero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(MetadataParser.NUMERO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fecha() {
	    let localctx = new FechaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MetadataParser.RULE_fecha);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(MetadataParser.FECHA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	finCampo() {
	    let localctx = new FinCampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MetadataParser.RULE_finCampo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.match(MetadataParser.FIN_CAMPO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MetadataParser.EOF = antlr4.Token.EOF;
MetadataParser.T__0 = 1;
MetadataParser.T__1 = 2;
MetadataParser.T__2 = 3;
MetadataParser.T__3 = 4;
MetadataParser.T__4 = 5;
MetadataParser.T__5 = 6;
MetadataParser.T__6 = 7;
MetadataParser.T__7 = 8;
MetadataParser.T__8 = 9;
MetadataParser.T__9 = 10;
MetadataParser.T__10 = 11;
MetadataParser.T__11 = 12;
MetadataParser.FIN_CAMPO = 13;
MetadataParser.FECHA = 14;
MetadataParser.NUMERO = 15;
MetadataParser.TEXTO = 16;
MetadataParser.WS = 17;

MetadataParser.RULE_metadata = 0;
MetadataParser.RULE_campo = 1;
MetadataParser.RULE_nombreCampo = 2;
MetadataParser.RULE_valorCampo = 3;
MetadataParser.RULE_listaTextos = 4;
MetadataParser.RULE_texto = 5;
MetadataParser.RULE_numero = 6;
MetadataParser.RULE_fecha = 7;
MetadataParser.RULE_finCampo = 8;

class MetadataContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MetadataParser.RULE_metadata;
    }

	EOF() {
	    return this.getToken(MetadataParser.EOF, 0);
	};

	campo = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CampoContext);
	    } else {
	        return this.getTypedRuleContext(CampoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.enterMetadata(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.exitMetadata(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MetadataVisitor ) {
	        return visitor.visitMetadata(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MetadataParser.RULE_campo;
    }

	nombreCampo() {
	    return this.getTypedRuleContext(NombreCampoContext,0);
	};

	valorCampo() {
	    return this.getTypedRuleContext(ValorCampoContext,0);
	};

	finCampo() {
	    return this.getTypedRuleContext(FinCampoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.enterCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.exitCampo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MetadataVisitor ) {
	        return visitor.visitCampo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreCampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MetadataParser.RULE_nombreCampo;
    }


	enterRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.enterNombreCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.exitNombreCampo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MetadataVisitor ) {
	        return visitor.visitNombreCampo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorCampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MetadataParser.RULE_valorCampo;
    }

	texto() {
	    return this.getTypedRuleContext(TextoContext,0);
	};

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	fecha() {
	    return this.getTypedRuleContext(FechaContext,0);
	};

	listaTextos() {
	    return this.getTypedRuleContext(ListaTextosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.enterValorCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.exitValorCampo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MetadataVisitor ) {
	        return visitor.visitValorCampo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListaTextosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MetadataParser.RULE_listaTextos;
    }

	texto = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TextoContext);
	    } else {
	        return this.getTypedRuleContext(TextoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.enterListaTextos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.exitListaTextos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MetadataVisitor ) {
	        return visitor.visitListaTextos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TextoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MetadataParser.RULE_texto;
    }

	TEXTO() {
	    return this.getToken(MetadataParser.TEXTO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.enterTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.exitTexto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MetadataVisitor ) {
	        return visitor.visitTexto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MetadataParser.RULE_numero;
    }

	NUMERO() {
	    return this.getToken(MetadataParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MetadataVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FechaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MetadataParser.RULE_fecha;
    }

	FECHA() {
	    return this.getToken(MetadataParser.FECHA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.enterFecha(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.exitFecha(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MetadataVisitor ) {
	        return visitor.visitFecha(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FinCampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MetadataParser.RULE_finCampo;
    }

	FIN_CAMPO() {
	    return this.getToken(MetadataParser.FIN_CAMPO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.enterFinCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MetadataListener ) {
	        listener.exitFinCampo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MetadataVisitor ) {
	        return visitor.visitFinCampo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MetadataParser.MetadataContext = MetadataContext; 
MetadataParser.CampoContext = CampoContext; 
MetadataParser.NombreCampoContext = NombreCampoContext; 
MetadataParser.ValorCampoContext = ValorCampoContext; 
MetadataParser.ListaTextosContext = ListaTextosContext; 
MetadataParser.TextoContext = TextoContext; 
MetadataParser.NumeroContext = NumeroContext; 
MetadataParser.FechaContext = FechaContext; 
MetadataParser.FinCampoContext = FinCampoContext; 
