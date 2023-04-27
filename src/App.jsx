import { useState } from 'react';
import './App.css';

function App() {

  return (
    <div className="container">
      <header>
        <ul>
          <li>Home</li>
          <li>Skills</li>
          <li>Projetos</li>
        </ul>
      </header>
      <main>
        <div className="information">
          <h2>Luan Patrik</h2>
          <h3>Desenvolvedor de Software e Admirador da área de Business Intelligence</h3>
          
        </div>
        <div className="image">

        </div>
      </main>
      <footer>
        <span>Create by Luan Patrik</span>
      </footer>
    </div>
  )
}

export default App
