// Generated from c:/Users/ignac/OneDrive/Documentos/Facultad - UTN 1°Año (2025)/3° Semestre/Sintaxis y Semántica de los Lenguajes/53333/Metadata.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link MetadataParser}.
 */
public interface MetadataListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link MetadataParser#metadata}.
	 * @param ctx the parse tree
	 */
	void enterMetadata(MetadataParser.MetadataContext ctx);
	/**
	 * Exit a parse tree produced by {@link MetadataParser#metadata}.
	 * @param ctx the parse tree
	 */
	void exitMetadata(MetadataParser.MetadataContext ctx);
	/**
	 * Enter a parse tree produced by {@link MetadataParser#campo}.
	 * @param ctx the parse tree
	 */
	void enterCampo(MetadataParser.CampoContext ctx);
	/**
	 * Exit a parse tree produced by {@link MetadataParser#campo}.
	 * @param ctx the parse tree
	 */
	void exitCampo(MetadataParser.CampoContext ctx);
	/**
	 * Enter a parse tree produced by {@link MetadataParser#nombreCampo}.
	 * @param ctx the parse tree
	 */
	void enterNombreCampo(MetadataParser.NombreCampoContext ctx);
	/**
	 * Exit a parse tree produced by {@link MetadataParser#nombreCampo}.
	 * @param ctx the parse tree
	 */
	void exitNombreCampo(MetadataParser.NombreCampoContext ctx);
	/**
	 * Enter a parse tree produced by {@link MetadataParser#valorCampo}.
	 * @param ctx the parse tree
	 */
	void enterValorCampo(MetadataParser.ValorCampoContext ctx);
	/**
	 * Exit a parse tree produced by {@link MetadataParser#valorCampo}.
	 * @param ctx the parse tree
	 */
	void exitValorCampo(MetadataParser.ValorCampoContext ctx);
	/**
	 * Enter a parse tree produced by {@link MetadataParser#listaTextos}.
	 * @param ctx the parse tree
	 */
	void enterListaTextos(MetadataParser.ListaTextosContext ctx);
	/**
	 * Exit a parse tree produced by {@link MetadataParser#listaTextos}.
	 * @param ctx the parse tree
	 */
	void exitListaTextos(MetadataParser.ListaTextosContext ctx);
	/**
	 * Enter a parse tree produced by {@link MetadataParser#texto}.
	 * @param ctx the parse tree
	 */
	void enterTexto(MetadataParser.TextoContext ctx);
	/**
	 * Exit a parse tree produced by {@link MetadataParser#texto}.
	 * @param ctx the parse tree
	 */
	void exitTexto(MetadataParser.TextoContext ctx);
	/**
	 * Enter a parse tree produced by {@link MetadataParser#numero}.
	 * @param ctx the parse tree
	 */
	void enterNumero(MetadataParser.NumeroContext ctx);
	/**
	 * Exit a parse tree produced by {@link MetadataParser#numero}.
	 * @param ctx the parse tree
	 */
	void exitNumero(MetadataParser.NumeroContext ctx);
	/**
	 * Enter a parse tree produced by {@link MetadataParser#fecha}.
	 * @param ctx the parse tree
	 */
	void enterFecha(MetadataParser.FechaContext ctx);
	/**
	 * Exit a parse tree produced by {@link MetadataParser#fecha}.
	 * @param ctx the parse tree
	 */
	void exitFecha(MetadataParser.FechaContext ctx);
	/**
	 * Enter a parse tree produced by {@link MetadataParser#finCampo}.
	 * @param ctx the parse tree
	 */
	void enterFinCampo(MetadataParser.FinCampoContext ctx);
	/**
	 * Exit a parse tree produced by {@link MetadataParser#finCampo}.
	 * @param ctx the parse tree
	 */
	void exitFinCampo(MetadataParser.FinCampoContext ctx);
}