import React, { useState } from "react";

const FiltroDeLista = () => {
  const [filtro, setFiltro] = useState("");
  const [nomes, setNomes] = useState([
    "Ana",
    "Carlos",
    "João",
    "Maria",
    "José",
    "Rita",
    "Lucas",
    "Marcos",
  ]); 

  const handleFiltroChange = (event) => {
    setFiltro(event.target.value);
  };

  // Filtra os nomes, ignorando maiúsculas e minúsculas
  const nomesFiltrados = nomes.filter((nome) =>
    nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Filtro de Lista</h1>
      <input
        type="text"
        value={filtro}
        onChange={handleFiltroChange}
        placeholder="Filtrar nomes"
        style={inputEstilo}
      />
      <ul style={listaEstilo}>
        {nomesFiltrados.map((nome, index) => (
          <li key={index}>{nome}</li>
        ))}
      </ul>
    </div>
  );
};

const inputEstilo = {
  padding: "10px",
  fontSize: "16px",
  marginBottom: "20px",
  width: "200px",
};

const listaEstilo = {
  listStyleType: "none",
  padding: 0,
};

export default FiltroDeLista;
