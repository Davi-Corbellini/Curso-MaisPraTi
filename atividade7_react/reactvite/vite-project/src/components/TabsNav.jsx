import React, { useState } from "react";

const Tabs = () => {
  const [abaAtiva, setAbaAtiva] = useState("sobre");

  const renderizarConteudo = () => {
    switch (abaAtiva) {
      case "sobre":
        return <div><h2>Sobre</h2><p>Bem-vindo à seção Sobre!</p></div>;
      case "contato":
        return <div><h2>Contato</h2><p>Entre em contato conosco!</p></div>;
      default:
        return <div><h2>Selecione uma aba</h2></div>;
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Interface de Tabs Navegáveis</h1>
      
      {/* Abas */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <button
          onClick={() => setAbaAtiva("sobre")}
          style={{
            padding: "10px 20px",
            margin: "0 10px",
            backgroundColor: abaAtiva === "sobre" ? "#4CAF50" : "#f1f1f1",
            color: abaAtiva === "sobre" ? "#fff" : "#000",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
            transition: "background-color 0.3s"
          }}
        >
          Sobre
        </button>
        <button
          onClick={() => setAbaAtiva("contato")}
          style={{
            padding: "10px 20px",
            margin: "0 10px",
            backgroundColor: abaAtiva === "contato" ? "#4CAF50" : "#f1f1f1",
            color: abaAtiva === "contato" ? "#fff" : "#000",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
            transition: "background-color 0.3s"
          }}
        >
          Contato
        </button>
      </div>

      {/* Conteúdo das Abas */}
      {renderizarConteudo()}
    </div>
  );
};

export default Tabs;
