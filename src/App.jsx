import { useState } from "react";

// TODO equipe1: descomentar quando o componente Buscar for adicionado em ./equipe1/Buscar
// import Buscar from "./equipe1/Buscar";
import { ModalDetalhes } from "./components/ModalDetalhes.jsx";
import "./App.css";

function App() {
  const [pesquisa, setPesquisa] = useState("");
  const [paises, setPaises] = useState([]); // salvar os países que vierem da API, para exibir na tela. sim, vamos salvar todos os dados buscados, depois posso usar para abrir o modal de detalhes sem precisar fazer refetch
  const [favoritosIds, setFavoritosIds] = useState([]); // salvar os IDs dos países fvaoritos, e então ao filtrar, usar eles para exibir
  const [paisSelecionado, setPaisSelecionado] = useState(null); // salvar o país selecionado para exibir os detalhes no modal. aqui sim, só salvo o país selecionado, e não preciso salvar os detalhes, porque já estão salvos no estado de países

  /* Fluxo e design:

  - barra de pesuisa centralizada
  - logo abaixo, os filtros (continente e população). usar tag <select> para continente é uma boa ideia
  - depois, o dashboard simples: divs com o nome da categoria (total de países caregados, países exibidos, favoritos e continentes disponíveis), e além do nome, exibir os numeros
  - por fim, uma div grande com mini cards de cada país, com nome e bandeira.
  - ao clicar no card, abrir o modal de detalhes do país, usando os dados já salvos (já foi implementado abaixo :D )
  */

  return (
    <main className="app-shell">
      <header className="app-header">
        <h1>Pesquisa por país</h1>
      </header>

      <section className="search-bar">
        <input
          type="text"
          placeholder="Pesquisar por país..."
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
          className="search-input"
        />
      </section>

      {/* TODO equipe1: substituir este bloco pelo <Buscar pesquisa={pesquisa} onSelecionar={setPaisSelecionado} /> */}
      {/* <Buscar pesquisa={pesquisa} onSelecionar={setPaisSelecionado} /> */}

      <ModalDetalhes
        isOpen={Boolean(paisSelecionado)}
        onClose={() => setPaisSelecionado(null)}
        pais={paisSelecionado}
      />
    </main>
  );
}

export default App;
