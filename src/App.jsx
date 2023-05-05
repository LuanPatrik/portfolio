import { useState } from 'react';
import './App.css';

import Logo from './components/img/logo.png';
import GitHub from './components/img/github.png';
import Linkedin from './components/img/linkedin.png';
import Instagram from './components/img/instagram.png';
import JavaScript from './components/img/javascript.png';
import React from './components/img/react.png';

function App() {

  return (
    <div className="container">
      <header>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projetos</a></li>
        </ul>
      </header>

      <section id='home'>
        <div className="information">
          <p>
            Desenvolvedor de software e admirador de BI.<br />
            Atualmente atuo como estagiário em Desenvolvimento Web, <br />sou membro da empresa júnior OneBit do IFMG - 
            Campus São João Evangelista com o cargo de Diretor do setor <br />de Projetos. Além disso, ocupo as posições 
            de representante de turma e membro do colegiado do Curso Bacharelado em Sistemas de Informação.
          </p>
        </div>
        
        <div className="profile">
          <div className="card">
            <div className="img-profile">

            </div>

            <h2>Luan Patrik</h2>
            <div className="social">
              <a href="https://github.com/LuanPatrik" target="_blank"><img src={GitHub} alt="GitHub" /></a>
              <a href="https://www.linkedin.com/in/luan-patrik-873a41185/" target="_blank"><img src={Linkedin} alt="GitHub" /></a>
              <a href="https://www.instagram.com/luan.p4trik/" target="_blank"><img src={Instagram} alt="GitHub" /></a>
            </div>
          </div>
        </div>
      </section>
        
      <section id='skills'>
        <h3>Minhas Skills</h3>
        <br />
        <div className="languages">
          <div className="reactjs" id='card'>
            <img src={React} alt="React" />
          </div>
          <div className="c#" id='card'>

          </div>
          <div className="js" id='card'>
            <img src={JavaScript} alt="Javascript" />
          </div>
          <div className="mysql" id='card'>

          </div>
        </div>

      </section>

      <section id='projects'>

      </section>

      {/* <footer>
        <span>Create by Luan Patrik</span>
      </footer> */}
    </div>
  )
}

export default App
