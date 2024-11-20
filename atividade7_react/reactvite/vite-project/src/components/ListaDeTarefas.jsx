import React, { useState } from "react";

const ListaDeTarefas = () => {
  const [tarefas, setTarefas] = useState([]); 
  const [novaTarefa, setNovaTarefa] = useState(""); 
  const [filtro, setFiltro] = useState("todas");
  const [concluidas, setConcluidas] = useState([]); 

  
  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") return;
    const nova = { id: Date.now(), texto: novaTarefa, concluida: false };
    setTarefas([...tarefas, nova]);
    setNovaTarefa("");
  };

  
  const alternarConclusao = (id) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };


  const removerTarefa = (id) => {
    const tarefaRemovida = tarefas.find((tarefa) => tarefa.id === id);
    if (tarefaRemovida) {
      setConcluidas([...concluidas, { ...tarefaRemovida, concluida: true }]);
      setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
    }
  };


  const tarefasFiltradas =
    filtro === "pendentes"
      ? tarefas.filter((tarefa) => !tarefa.concluida)
      : filtro === "concluidas"
      ? concluidas
      : tarefas;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Lista de Tarefas</h1>
      <div>
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Digite uma tarefa"
          style={inputEstilo}
        />
        <button onClick={adicionarTarefa} style={botaoEstilo}>
          Adicionar
        </button>
      </div>
      <div style={{ margin: "20px 0" }}>
        <button
          onClick={() => setFiltro("todas")}
          style={{
            ...botaoEstilo,
            backgroundColor: filtro === "todas" ? "#555" : "#333",
          }}
        >
          Todas
        </button>
        <button
          onClick={() => setFiltro("pendentes")}
          style={{
            ...botaoEstilo,
            backgroundColor: filtro === "pendentes" ? "#555" : "#333",
          }}
        >
          Pendentes
        </button>
        <button
          onClick={() => setFiltro("concluidas")}
          style={{
            ...botaoEstilo,
            backgroundColor: filtro === "concluidas" ? "#555" : "#333",
          }}
        >
          Concluídas
        </button>
      </div>
      <ul style={listaEstilo}>
        {tarefasFiltradas.map((tarefa) => (
          <li key={tarefa.id} style={tarefa.concluida ? concluidaEstilo : {}}>
            <span
              onClick={() => alternarConclusao(tarefa.id)}
              style={{ cursor: "pointer" }}
            >
              {tarefa.texto}
            </span>
            {filtro !== "concluidas" && (
              <button
                onClick={() => removerTarefa(tarefa.id)}
                style={removerBotaoEstilo}
              >
                Remover
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const inputEstilo = {
  padding: "10px",
  fontSize: "16px",
  marginRight: "10px",
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

const removerBotaoEstilo = {
  padding: "5px 10px",
  fontSize: "12px",
  cursor: "pointer",
  marginLeft: "10px",
  backgroundColor: "#f44336",
  color: "#fff",
  border: "none",
  borderRadius: "3px",
};

const listaEstilo = {
  listStyleType: "none",
  padding: 0,
};

const concluidaEstilo = {
  textDecoration: "line-through",
  color: "gray",
};

export default ListaDeTarefas;
