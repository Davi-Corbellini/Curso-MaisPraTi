import React, { useState, useEffect } from "react";

const Timer = () => {
  const [tempo, setTempo] = useState(0);
  const [tempoRestante, setTempoRestante] = useState(0);
  const [rodando, setRodando] = useState(false);
  const [intervalo, setIntervalo] = useState(null);

  const iniciarTimer = () => {
    if (tempo > 0) {
      setTempoRestante(tempo);
      setRodando(true);
    }
  };

  const pausarTimer = () => {
    clearInterval(intervalo);
    setRodando(false);
  };

  const reiniciarTimer = () => {
    clearInterval(intervalo);
    setRodando(false);
    setTempo(0);
    setTempoRestante(0);
  };

  useEffect(() => {
    if (rodando) {
      const intervaloId = setInterval(() => {
        setTempoRestante((prevTempo) => {
          if (prevTempo <= 1) {
            clearInterval(intervaloId); 
            alert("O tempo acabou!"); 
            setRodando(false);
            return 0;
          }
          return prevTempo - 1; 
        });
      }, 1000);

      setIntervalo(intervaloId); 

      return () => clearInterval(intervaloId); 
    }
  }, [rodando]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Timer com Contagem Regressiva</h1>
      <div>
        <input
          type="number"
          value={tempo}
          onChange={(e) => setTempo(Math.max(0, e.target.value))}
          placeholder="Defina o tempo em segundos"
          min="0"
        />
        <div>
          <button onClick={iniciarTimer} disabled={rodando || tempo === 0}>
            Iniciar
          </button>
          <button onClick={pausarTimer} disabled={!rodando}>
            Pausar
          </button>
          <button onClick={reiniciarTimer}>Reiniciar</button>
        </div>
        <h2>{tempoRestante > 0 ? `Tempo restante: ${tempoRestante} segundos` : "Timer pausado ou finalizado"}</h2>
      </div>
    </div>
  );
};

export default Timer;
