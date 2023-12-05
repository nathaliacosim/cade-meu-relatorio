import PageContainer from "../components/PageContainer";
import Paper from "../components/Paper";

function Home() {
  return (
    <PageContainer>
      <Paper>
        <div>
          <h3>Contábil</h3>
          <ul>
            <li>
              <a href="/empenhos">Relatório de Empenhos</a>
            </li>
            <li>
              <a href="/credores">Relatório de Credores</a>
            </li>
            <li>
              <a href="/pagamentos">Relatório de Pagamentos</a>
            </li>
            <li>
              <a href="/nseioq">Relatório de N sei Oq</a>
            </li>
            <li>
              <a href="/nseioqla">Relatório de N sei Oq Lá</a>
            </li>
          </ul>
        </div>
      </Paper>
    </PageContainer>
  );
}

export default Home;
