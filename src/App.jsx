import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [livros, setLivros] = useState([]);
  const [desenhos, setDesenhos] = useState([]);

  function getBook() {
    fetch("https://onrender-flask-cors-1.onrender.com")
      .then((response) => response.json())
      .then((data) => setLivros(data));
  }
  function getDesenhos() {
    fetch("https://onrender-flask-cors-1.onrender.com/desenhos")
      .then((response) => response.json())
      .then((data) => setDesenhos(data));
  }

  useEffect(() => {
    getBook();
    getDesenhos();
  },[])


  return (
    <>
      <h2>render / flask api</h2>
      <h3 style={{marginTop: '20px'}}>Livros</h3> 
      {livros.length < 1 && <p>carregando livros...</p>}
      <ul>
        {livros?.map((livro) => (
          <li key={livro.id}>
            {livro.nome} by {livro.autor}
          </li>
        ))}
      </ul>
      <h3 style={{marginTop: '20px'}}>desenhos</h3> 
      {desenhos.length < 1 && <p>carregando desenhos...</p>}
     <ul>
        {desenhos?.map((desenho) => (
          <li key={desenho.id}>
            {desenho.nome} since {desenho.anoLancamento}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
