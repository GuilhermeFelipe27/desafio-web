import { useState, useEffect } from "react";

export default function Buscar() {
  const [dados, setDados] = useState(null);

  const buscarPaises = () => {
      fetch("https://restcountries.com/v3.1/all?fields=name,flags")
        .then((res) => res.json())
        .then((res) => {
          setDados(res);
        })
        .catch(err => console.error("Erro ao buscar dados:", err));

    console.log(dados)
  }

  return (
    <>
      <div>
        <button onClick={buscarPaises}> Carregar países </button>
      </div>

      <div>
        
      </div>
    </>
  );
}
