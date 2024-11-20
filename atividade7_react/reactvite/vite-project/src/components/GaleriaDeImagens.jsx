import React, { useState } from "react";
import img1 from "../assets/1.png"
import img2 from "../assets/2.png"
import img3 from "../assets/3.png"
import img4 from "../assets/4.png"

const GaleriaDeImagens = () => {
  const imagens = [
    img1,
    img2,
    img3,
    img4
  ];

  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  const [indiceImagem, setIndiceImagem] = useState(null);
  
  const abrirModal = (indice) => {
    setImagemSelecionada(imagens[indice]);
    setIndiceImagem(indice);
  };

  const fecharModal = () => {
    setImagemSelecionada(null);
    setIndiceImagem(null);
  };

  const proximaImagem = () => {
    if (indiceImagem < imagens.length - 1) {
      setIndiceImagem(indiceImagem + 1);
      setImagemSelecionada(imagens[indiceImagem + 1]);
    }
  };

  const imagemAnterior = () => {
    if (indiceImagem > 0) {
      setIndiceImagem(indiceImagem - 1);
      setImagemSelecionada(imagens[indiceImagem - 1]);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Galeria de Imagens</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {imagens.map((imagem, indice) => (
          <img
            key={indice}
            src={imagem}
            alt={`Imagem ${indice + 1}`}
            style={miniaturaEstilo}
            onClick={() => abrirModal(indice)}
          />
        ))}
      </div>

      {imagemSelecionada && (
        <div style={modalEstilo}>
          <div style={modalConteudoEstilo}>
            <button onClick={fecharModal} style={botaoFecharEstilo}>Fechar</button>
            <img
              src={imagemSelecionada}
              alt="Imagem selecionada"
              style={imagemModalEstilo}
            />
            <div>
              <button onClick={imagemAnterior} style={botaoNavegacaoEstilo}>Anterior</button>
              <button onClick={proximaImagem} style={botaoNavegacaoEstilo}>Próxima</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const miniaturaEstilo = {
  width: "100px",
  height: "100px",
  cursor: "pointer",
  borderRadius: "5px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const modalEstilo = {
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: "1000",
};

const modalConteudoEstilo = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px",
  position: "relative",
  textAlign: "center",
};

const imagemModalEstilo = {
  width: "500px",
  height: "500px",
  objectFit: "cover",
};

const botaoFecharEstilo = {
  position: "absolute",
  top: "10px",
  right: "10px",
  padding: "10px",
  fontSize: "16px",
  cursor: "pointer",
  backgroundColor: "red",
  color: "#fff",
  border: "none",
  borderRadius: "50%",
};

const botaoNavegacaoEstilo = {
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  backgroundColor: "#333",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  margin: "10px",
};

export default GaleriaDeImagens;
