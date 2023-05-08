import { useState } from 'react';
import './App.css';

function App() {

  return (
    <div className="container">
      <header>
        <div className="logo">
          <img src="./src/components/img/logo.png" alt="Logo" />
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
          <br />
          <p>
            Desenvolvedor de software e admirador de BI.<br />
            Atualmente atuo como estagiário em Desenvolvimento Web, sou membro da empresa júnior OneBit do IFMG - 
            Campus São João Evangelista com o cargo de Diretor do setor de Projetos. Além disso, ocupo as posições 
            de representante de turma e membro do colegiado do Curso Bacharelado em Sistemas de Informação.
          </p>
        </div>
        
        <div className="profile">
          <div className="card">
            <div className="img-profile">
              <img src="./src/components/img/profile.jpeg" alt="Foto do Luan" />
            </div>

            <h1>Luan Patrik</h1>
            <div className="social">
              <a href="https://github.com/LuanPatrik" target="_blank"><img src="./src/components/img/github.png" alt="GitHub" /></a>
              <a href="https://www.linkedin.com/in/luan-patrik-873a41185/" target="_blank"><img src="./src/components/img/linkedin.png" alt="GitHub" /></a>
              <a href="https://www.instagram.com/luan.p4trik/" target="_blank"><img src="./src/components/img/instagram.png" alt="GitHub" /></a>
            </div>
          </div>
        </div>
      </div>
        
      <div id='skills'>
        <h1>Minhas Skills</h1>
        <br />
        <div className="languages">
          <div className="reactjs" id='card'>
            <img src="./src/components/img/react.png" alt="React" />
          </div>
          <div className="csharp" id='card'>
            <img src="./src/components/img/csharp.png" alt="Csharp" />
          </div>
          <div className="js" id='card'>
            <img src="./src/components/img/javascript.png" alt="Javascript" />
          </div>
          <div className="mysql" id='card'>
            <img src="./src/components/img/mysql.png" alt="MySql" />
          </div>
          <div className="trello" id='card'>
            <img src="./src/components/img/trello.png" alt="Trello" />
          </div>
          <div className="powerbi" id='card'>
            <img src="./src/components/img/power-bi.png" alt="PowerBi" />
          </div>
        </div>
      </div>

      <div id='projects'>
        <h1>Projetos</h1>
        <br />
        <br />

        <div className="list-projects">
          <div class="list" id='box'>
            <h3>Quiz ReactJS</h3>
            <br />
            <img src="./src/components/img/quiz.png" alt="QRCode" />
            <br />
            <div class="description">
              <p>O projeto é um Quiz de múltipla escolha referente ao reactjs. São 3 páginas simples e foram utilizados as rotas para navegar entre elas.</p>
            </div>
            <br />
            <div className="btn-acess">
              <button><a href="https://github.com/LuanPatrik/Quiz" target="_blank">Acesse Aqui!</a></button>
            </div>
          </div>

          <div class="list" id='box'>
            <h3>Estante Tech</h3>
            <br />
            <img src="./src/components/img/estanteTech2.png" alt="QRCode" />
            <br />
            <div class="description">
              <p>Software para desktop com o intuito de auxiliar no emprestimo e devolução de livros.</p>
            </div>
            <br />
            <div className="btn-acess">
              <button><a href="https://github.com/LuanPatrik/EstanteTech" target="_blank">Acesse Aqui!</a></button>
            </div>
          </div>

          <div class="list" id='box'>
            <h3>Tabela do Brasileirão</h3>
            <br />
            <img src="./src/components/img/brasileirao.png" alt="QRCode" />
            <br />
            <div class="description">
              <p>O projeto conta com apenas 1 página refletindo a tabela atual do Campeonato Brasileiro, para a elaboração da página foi utilizado a API Futebol.</p>
            </div>
            <br />
            <div className="btn-acess">
              <button><a href="https://github.com/LuanPatrik/brasileirao" target="_blank">Acesse Aqui!</a></button>
            </div>
          </div>

          <div class="list" id='box'>
            <h3>Busca CEP</h3>
            <br />
            <img src="./src/components/img/busca-cep.png" alt="QRCode" />
            <br />
            <div class="description">
              <p>Neste projeto, você poderá consultar CEP automaticamente a partir de uma simples página da web. 
                Tudo o que você precisa fazer é informar o CEP desejado e, ao sair do campo de texto, uma consulta 
                será realizada na API VIA CEP preenchendo os dados encontrados.
              </p>
              <br />
            </div>
            <div className="btn-acess">
              <button><a href="https://github.com/LuanPatrik/busca-cep" target="_blank">Acesse Aqui!</a></button>
            </div>
          </div>

          <div class="list" id='box'>
            <h3>Gerador de QR Code</h3>
            <br />
            <img src="./src/components/img/qrCode.png" alt="QRCode" />
            <br />
            <div class="description">
              <p>Nesse projeto, você conseguirá gerar QR Codes e baixa-los. Basta inserir no campo texto alguma informação ou link do que desejar.</p>
            </div>
            <br />
            <div className="btn-acess">
              <button><a href="https://github.com/LuanPatrik/Gerador-QRCode" target="_blank">Acesse Aqui!</a></button>
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
