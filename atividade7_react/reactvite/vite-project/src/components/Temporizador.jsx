import React, { useState, useEffect } from "react";

const Temporizador = () => {
  const [tempo, setTempo] = useState(0); 
  const [rodando, setRodando] = useState(false); 
  const [intervalo, setIntervalo] = useState(null); 

  const iniciarTemporizador = () => {
    if (!rodando) {
      const novoIntervalo = setInterval(() => {
        setTempo((prevTempo) => prevTempo + 1);
      }, 1000);
      setIntervalo(novoIntervalo);
      setRodando(true);
    }
  };

  const pausarTemporizador = () => {
    clearInterval(intervalo);
    setRodando(false);
  };

  const reiniciarTemporizador = () => {
    clearInterval(intervalo);
    setTempo(0);
    setRodando(false);
  };

  useEffect(() => {
    return () => {
      if (intervalo) {
        clearInterval(intervalo);
      }
    };
  }, [intervalo]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Temporizador</h1>
      <p>Tempo: {tempo} segundos</p>
      <div>
        {!rodando ? (
          <button onClick={iniciarTemporizador} style={botaoEstilo}>
            Iniciar
          </button>
        ) : (
          <button onClick={pausarTemporizador} style={botaoEstilo}>
            Pausar
          </button>
        )}
        <button onClick={reiniciarTemporizador} style={botaoEstilo}>
          Reiniciar
        </button>
      </div>
    </div>
  );
};

const botaoEstilo = {
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  marginRight: "5px",
  backgroundColor: "#333",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
};

export default Temporizador;
