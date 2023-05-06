import { useState } from 'react';
import './App.css';

import Logo from './components/img/logo.png';
import GitHub from './components/img/github.png';
import Linkedin from './components/img/linkedin.png';
import Instagram from './components/img/instagram.png';
import React from './components/img/react.png';
import JavaScript from './components/img/javascript.png';
import Csharp from './components/img/csharp.png';
import MySql from './components/img/mysql.png';
import PowerBi from './components/img/power-bi.png';
import Trello from './components/img/trello.png';

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

      <div id='home'>
        <div className="information">
          <h1>Sobre Mim</h1>
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
      </div>
        
      <div id='skills'>
        <h1>Minhas Skills</h1>
        <br />
        <div className="languages">
          <div className="reactjs" id='card'>
            <img src={React} alt="React" />
          </div>
          <div className="csharp" id='card'>
            <img src={Csharp} alt="Csharp" />
          </div>
          <div className="js" id='card'>
            <img src={JavaScript} alt="Javascript" />
          </div>
          <div className="mysql" id='card'>
            <img src={MySql} alt="MySql" />
          </div>
          <div className="trello" id='card'>
            <img src={Trello} alt="Trello" />
          </div>
          <div className="powerbi" id='card'>
            <img src={PowerBi} alt="PowerBi" />
          </div>
        </div>

      </div>

      <div id='projects'>
        <h1>Projetos</h1>
        <br />

        <div className="list-projects">
          <div class="list">
            <img src={"img_avatar.png"} alt="Avatar" style="width:100%" />
            <div class="description">
              <h4><b>John Doe</b></h4>
              <p>Architect & Engineer</p>
            </div>
          </div>

        </div>
      </div>

      <footer>
        <span>Create by Luan Patrik</span>
      </footer>
    </div>
  )
}

export default App
