import { useEffect, useState } from "react";

export default function Buscar({ pesquisa }) {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population",
    )
      .then((res) => res.json())
      .then((res) => {
        setDados(res);
        setCarregando(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar dados:", err);
        setCarregando(false);
      });
  }, []);

  const dadosFiltrados = dados.filter((pais) =>
    pais.name.common.toLowerCase().includes(pesquisa.toLowerCase()),
  );

  if (carregando) {
    return <p className="results-state">Carregando países...</p>;
  }

  if (!dadosFiltrados.length) {
    return <p className="results-state">Nenhum país encontrado.</p>;
  }

  return (
    <section className="countries-section">
      <div className="countries-grid">
        {dadosFiltrados.map((pais) => (
          <article className="country-card" key={pais.name.common}>
            <img
              className="country-flag"
              src={pais.flags?.svg || pais.flags?.png}
              alt={`Bandeira de ${pais.name.common}`}
            />

            <div className="country-content">
              <h2>{pais.name.common}</h2>

              <div className="country-details">
                <p><span>Capital:</span> {pais.capital?.[0] || "-"}</p>
                <p><span>Região:</span> {pais.region || "-"}</p>
                <p><span>População:</span> {pais.population?.toLocaleString("pt-BR") || "-"}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
