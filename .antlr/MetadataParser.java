// Generated from c:/Users/ignac/OneDrive/Documentos/Facultad - UTN 1°Año (2025)/3° Semestre/Sintaxis y Semántica de los Lenguajes/53333/Metadata.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class MetadataParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, FIN_CAMPO=13, FECHA=14, NUMERO=15, TEXTO=16, 
		WS=17;
	public static final int
		RULE_metadata = 0, RULE_campo = 1, RULE_nombreCampo = 2, RULE_valorCampo = 3, 
		RULE_listaTextos = 4, RULE_texto = 5, RULE_numero = 6, RULE_fecha = 7, 
		RULE_finCampo = 8;
	private static String[] makeRuleNames() {
		return new String[] {
			"metadata", "campo", "nombreCampo", "valorCampo", "listaTextos", "texto", 
			"numero", "fecha", "finCampo"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "':'", "'nombre'", "'tipo'", "'tamano'", "'creado'", "'modificado'", 
			"'autor'", "'descripci\\u00C3\\u00B3n'", "'etiquetas'", "'['", "','", 
			"']'", "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, "FIN_CAMPO", "FECHA", "NUMERO", "TEXTO", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Metadata.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public MetadataParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MetadataContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(MetadataParser.EOF, 0); }
		public List<CampoContext> campo() {
			return getRuleContexts(CampoContext.class);
		}
		public CampoContext campo(int i) {
			return getRuleContext(CampoContext.class,i);
		}
		public MetadataContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_metadata; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MetadataListener ) ((MetadataListener)listener).enterMetadata(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MetadataListener ) ((MetadataListener)listener).exitMetadata(this);
		}
	}

	public final MetadataContext metadata() throws RecognitionException {
		MetadataContext _localctx = new MetadataContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_metadata);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(21);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1020L) != 0)) {
				{
				{
				setState(18);
				campo();
				}
				}
				setState(23);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(24);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CampoContext extends ParserRuleContext {
		public NombreCampoContext nombreCampo() {
			return getRuleContext(NombreCampoContext.class,0);
		}
		public ValorCampoContext valorCampo() {
			return getRuleContext(ValorCampoContext.class,0);
		}
		public FinCampoContext finCampo() {
			return getRuleContext(FinCampoContext.class,0);
		}
		public CampoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_campo; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MetadataListener ) ((MetadataListener)listener).enterCampo(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MetadataListener ) ((MetadataListener)listener).exitCampo(this);
		}
	}

	public final CampoContext campo() throws RecognitionException {
		CampoContext _localctx = new CampoContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_campo);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(26);
			nombreCampo();
			setState(27);
			match(T__0);
			setState(28);
			valorCampo();
			setState(29);
			finCampo();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NombreCampoContext extends ParserRuleContext {
		public NombreCampoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nombreCampo; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MetadataListener ) ((MetadataListener)listener).enterNombreCampo(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MetadataListener ) ((MetadataListener)listener).exitNombreCampo(this);
		}
	}

	public final NombreCampoContext nombreCampo() throws RecognitionException {
		NombreCampoContext _localctx = new NombreCampoContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_nombreCampo);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(31);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1020L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ValorCampoContext extends ParserRuleContext {
		public TextoContext texto() {
			return getRuleContext(TextoContext.class,0);
		}
		public NumeroContext numero() {
			return getRuleContext(NumeroContext.class,0);
		}
		public FechaContext fecha() {
			return getRuleContext(FechaContext.class,0);
		}
		public ListaTextosContext listaTextos() {
			return getRuleContext(ListaTextosContext.class,0);
		}
		public ValorCampoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_valorCampo; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MetadataListener ) ((MetadataListener)listener).enterValorCampo(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MetadataListener ) ((MetadataListener)listener).exitValorCampo(this);
		}
	}

	public final ValorCampoContext valorCampo() throws RecognitionException {
		ValorCampoContext _localctx = new ValorCampoContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_valorCampo);
		try {
			setState(37);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case TEXTO:
				enterOuterAlt(_localctx, 1);
				{
				setState(33);
				texto();
				}
				break;
			case NUMERO:
				enterOuterAlt(_localctx, 2);
				{
				setState(34);
				numero();
				}
				break;
			case FECHA:
				enterOuterAlt(_localctx, 3);
				{
				setState(35);
				fecha();
				}
				break;
			case T__9:
				enterOuterAlt(_localctx, 4);
				{
				setState(36);
				listaTextos();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ListaTextosContext extends ParserRuleContext {
		public List<TextoContext> texto() {
			return getRuleContexts(TextoContext.class);
		}
		public TextoContext texto(int i) {
			return getRuleContext(TextoContext.class,i);
		}
		public ListaTextosContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_listaTextos; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MetadataListener ) ((MetadataListener)listener).enterListaTextos(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MetadataListener ) ((MetadataListener)listener).exitListaTextos(this);
		}
	}

	public final ListaTextosContext listaTextos() throws RecognitionException {
		ListaTextosContext _localctx = new ListaTextosContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_listaTextos);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(39);
			match(T__9);
			setState(40);
			texto();
			setState(45);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__10) {
				{
				{
				setState(41);
				match(T__10);
				setState(42);
				texto();
				}
				}
				setState(47);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(48);
			match(T__11);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TextoContext extends ParserRuleContext {
		public TerminalNode TEXTO() { return getToken(MetadataParser.TEXTO, 0); }
		public TextoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_texto; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MetadataListener ) ((MetadataListener)listener).enterTexto(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MetadataListener ) ((MetadataListener)listener).exitTexto(this);
		}
	}

	public final TextoContext texto() throws RecognitionException {
		TextoContext _localctx = new TextoContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_texto);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(50);
			match(TEXTO);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NumeroContext extends ParserRuleContext {
		public TerminalNode NUMERO() { return getToken(MetadataParser.NUMERO, 0); }
		public NumeroContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_numero; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MetadataListener ) ((MetadataListener)listener).enterNumero(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MetadataListener ) ((MetadataListener)listener).exitNumero(this);
		}
	}

	public final NumeroContext numero() throws RecognitionException {
		NumeroContext _localctx = new NumeroContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_numero);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(52);
			match(NUMERO);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FechaContext extends ParserRuleContext {
		public TerminalNode FECHA() { return getToken(MetadataParser.FECHA, 0); }
		public FechaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fecha; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MetadataListener ) ((MetadataListener)listener).enterFecha(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MetadataListener ) ((MetadataListener)listener).exitFecha(this);
		}
	}

	public final FechaContext fecha() throws RecognitionException {
		FechaContext _localctx = new FechaContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_fecha);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(54);
			match(FECHA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FinCampoContext extends ParserRuleContext {
		public TerminalNode FIN_CAMPO() { return getToken(MetadataParser.FIN_CAMPO, 0); }
		public FinCampoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_finCampo; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MetadataListener ) ((MetadataListener)listener).enterFinCampo(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MetadataListener ) ((MetadataListener)listener).exitFinCampo(this);
		}
	}

	public final FinCampoContext finCampo() throws RecognitionException {
		FinCampoContext _localctx = new FinCampoContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_finCampo);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(56);
			match(FIN_CAMPO);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u0011;\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0001\u0000\u0005\u0000\u0014\b\u0000\n\u0000\f\u0000\u0017"+
		"\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0003\u0003&\b\u0003\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0005\u0004,\b\u0004\n\u0004\f\u0004/\t\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001"+
		"\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0000\u0000\t\u0000\u0002\u0004"+
		"\u0006\b\n\f\u000e\u0010\u0000\u0001\u0001\u0000\u0002\t6\u0000\u0015"+
		"\u0001\u0000\u0000\u0000\u0002\u001a\u0001\u0000\u0000\u0000\u0004\u001f"+
		"\u0001\u0000\u0000\u0000\u0006%\u0001\u0000\u0000\u0000\b\'\u0001\u0000"+
		"\u0000\u0000\n2\u0001\u0000\u0000\u0000\f4\u0001\u0000\u0000\u0000\u000e"+
		"6\u0001\u0000\u0000\u0000\u00108\u0001\u0000\u0000\u0000\u0012\u0014\u0003"+
		"\u0002\u0001\u0000\u0013\u0012\u0001\u0000\u0000\u0000\u0014\u0017\u0001"+
		"\u0000\u0000\u0000\u0015\u0013\u0001\u0000\u0000\u0000\u0015\u0016\u0001"+
		"\u0000\u0000\u0000\u0016\u0018\u0001\u0000\u0000\u0000\u0017\u0015\u0001"+
		"\u0000\u0000\u0000\u0018\u0019\u0005\u0000\u0000\u0001\u0019\u0001\u0001"+
		"\u0000\u0000\u0000\u001a\u001b\u0003\u0004\u0002\u0000\u001b\u001c\u0005"+
		"\u0001\u0000\u0000\u001c\u001d\u0003\u0006\u0003\u0000\u001d\u001e\u0003"+
		"\u0010\b\u0000\u001e\u0003\u0001\u0000\u0000\u0000\u001f \u0007\u0000"+
		"\u0000\u0000 \u0005\u0001\u0000\u0000\u0000!&\u0003\n\u0005\u0000\"&\u0003"+
		"\f\u0006\u0000#&\u0003\u000e\u0007\u0000$&\u0003\b\u0004\u0000%!\u0001"+
		"\u0000\u0000\u0000%\"\u0001\u0000\u0000\u0000%#\u0001\u0000\u0000\u0000"+
		"%$\u0001\u0000\u0000\u0000&\u0007\u0001\u0000\u0000\u0000\'(\u0005\n\u0000"+
		"\u0000(-\u0003\n\u0005\u0000)*\u0005\u000b\u0000\u0000*,\u0003\n\u0005"+
		"\u0000+)\u0001\u0000\u0000\u0000,/\u0001\u0000\u0000\u0000-+\u0001\u0000"+
		"\u0000\u0000-.\u0001\u0000\u0000\u0000.0\u0001\u0000\u0000\u0000/-\u0001"+
		"\u0000\u0000\u000001\u0005\f\u0000\u00001\t\u0001\u0000\u0000\u000023"+
		"\u0005\u0010\u0000\u00003\u000b\u0001\u0000\u0000\u000045\u0005\u000f"+
		"\u0000\u00005\r\u0001\u0000\u0000\u000067\u0005\u000e\u0000\u00007\u000f"+
		"\u0001\u0000\u0000\u000089\u0005\r\u0000\u00009\u0011\u0001\u0000\u0000"+
		"\u0000\u0003\u0015%-";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}