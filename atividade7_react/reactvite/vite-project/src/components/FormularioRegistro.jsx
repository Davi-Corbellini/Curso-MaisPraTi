import React, { useState } from "react";

const BoasVindas = ({ nome }) => {
  return <h2>Bem-vindo, {nome}!</h2>;
};

const FormularioRegistro = () => {
  const [nome, setNome] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [senha, setSenha] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");
  const [formEnviado, setFormEnviado] = useState(false);

  
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!nome || !email || !senha) {
      setMensagemErro("Todos os campos devem ser preenchidos!");
      return;
    }

    setMensagemErro(""); 
    setFormEnviado(true);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Formulário de Registro</h1>
      {!formEnviado ? (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              style={inputEstilo}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputEstilo}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              style={inputEstilo}
            />
          </div>
          {mensagemErro && <p style={{ color: "red" }}>{mensagemErro}</p>}
          <button type="submit" style={botaoEstilo}>
            Registrar
          </button>
        </form>
      ) : (
        <BoasVindas nome={nome} />
      )}
    </div>
  );
};

const inputEstilo = {
  padding: "10px",
  fontSize: "16px",
  marginBottom: "10px",
  width: "200px",
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

export default FormularioRegistro;
