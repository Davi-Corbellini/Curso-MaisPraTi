import React, { useState, useEffect } from "react";

const AlteracaoCorFundo = () => {
  const [corAtual, setCorAtual] = useState("#ffffff");

  // Função para gerar uma cor aleatória em formato hexadecimal
  const gerarCorAleatoria = () => {
    const letras = "0123456789ABCDEF";
    let cor = "#";
    for (let i = 0; i < 6; i++) {
      cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
  };

  useEffect(() => {
    document.body.style.backgroundColor = corAtual;
  }, [corAtual]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Cor Atual: {corAtual}</h1>
      <button
        onClick={() => setCorAtual(gerarCorAleatoria())}
        style={botaoEstilo}
      >
        Mudar Cor de Fundo
      </button>
    </div>
  );
};

const botaoEstilo = {
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  backgroundColor: "#333",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
};

export default AlteracaoCorFundo;
