import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [livros, setLivros] = useState([])
  
  function getBook(){
    fetch('https://onrender-flask-cors-1.onrender.com')
    .then(response => response.json())
    .then(data => setLivros(data))
  }

  getBook()
  return (
    <>
      <h1>On render / flask api</h1>

      {
        livros.length < 1 && 
        <p>carregando livros...</p>
      }
      <ul>

        { livros?.map(livro => 
          <li key={livro.id}>{livro.nome} by {livro.autor}</li>
          ) }
      </ul>
    </>
  )
}

export default App
