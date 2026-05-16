import { useState } from "react";

export default function Buscar() {
  const [dados, setDados] = useState([]);


  const buscarPaises = () => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags")
      .then((res) => res.json())
      .then((res) => {
        setDados(res);
      })
      .catch((err) => {
        console.error("Erro ao buscar dados:", err);
      });
  }

  return (
    <>
      <div>
        <button onClick={buscarPaises}> Carregar países </button>
      </div>

      <div>
        <ul>
          {dados.map((pais, index) => (
            <li key={index}>
              {pais.name.common}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
