import NotaEmpenho1 from "../assets/nota_de_empenho.png";
import NotaEmpenho2 from "../assets/nota_de_empenho_mod2.png";
import PageContainer from "../components/PageContainer";
import Paper from "../components/Paper";
import './Relatorios.css'

function Empenho() {
  return (
    <PageContainer>
      <Paper>
        <div>
          <h3>Relatórios de Empenho</h3>
          <div>
            <p>Nota de Empenho Modelo 1</p>
            <img className="imagem-relatorio" src={NotaEmpenho1} alt="" />
          </div>
          <div>
            <p>Nota de Empenho Modelo 2</p>
            <img className="imagem-relatorio" src={NotaEmpenho2} alt="" />
          </div>
        </div>
      </Paper>
    </PageContainer>
  );
}

export default Empenho;
