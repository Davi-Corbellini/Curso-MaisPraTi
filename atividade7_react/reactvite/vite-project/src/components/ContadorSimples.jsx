import React, { useState } from "react";

const ContadorSimples = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);

  const decrementar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementar} style={botaoEstilo}>
        Incrementar
      </button>
      <button onClick={decrementar} style={botaoEstilo}>
        Decrementar
      </button>
    </div>
  );
};

const botaoEstilo = {
  margin: "5px",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
};

export default ContadorSimples;
