import React, { useState, useEffect } from "react";

const AplicacaoDeRequisicao = () => {
  const [posts, setPosts] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  const buscarPosts = async () => {
    setCarregando(true);
    setErro("");
    try {
      const resposta = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!resposta.ok) {
        throw new Error("Erro ao carregar os posts");
      }
      const dados = await resposta.json();
      setPosts(dados);
    } catch (erro) {
      setErro(erro.message);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    buscarPosts();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Lista de Posts</h1>
      {carregando ? (
        <p>Carregando...</p>
      ) : erro ? (
        <p style={{ color: "red" }}>{erro}</p>
      ) : (
        <ul style={listaEstilo}>
          {posts.map((post) => (
            <li key={post.id} style={itemEstilo}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
      <button onClick={buscarPosts} style={botaoEstilo}>Recarregar Dados</button>
    </div>
  );
};

const listaEstilo = {
  listStyleType: "none",
  padding: 0,
};

const itemEstilo = {
  marginBottom: "20px",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
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

export default AplicacaoDeRequisicao;
