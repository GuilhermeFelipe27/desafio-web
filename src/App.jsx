import { useState } from 'react'


export function App() {
  const [pesquisa, setPesquisa] = useState("")

  const paises = ["Brasil", "Argentina", "Chile", "Colômbia", "Peru", "Venezuela", "Uruguai", "Paraguai", "Bolívia", "Equador"]
  //const [paises, setPaises] = useState([])
  const itensFiltrados = paises.filter((pais) => 
    pais.toLowerCase().includes(pesquisa.toLowerCase())
  );

  
return (
    <div style={{ padding: "20px" }}>
      <h1>Pesquisa por país</h1>

      <input
        type="text"
        placeholder="Pesquisar por país..."
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      <ul>
        {itensFiltrados.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
