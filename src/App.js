import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Componentes
import User from './components/User';
import Links from './components/Links';
import Materia from './components/Materia';
// Paginas
import Inicio from './paginas/Inicio';
import Liniales from './paginas/Lineales';
import Alternativos from './paginas/Alternativos';
import Repeticion from './paginas/Repeticion';
import Otros from './paginas/Otros';

// Css
import './App.css';

import llama from './assets/img/llama.svg';

function App() {
  return (
    <Router>
      <img src={llama} className="img-llama" alt="" />
      <main>
        <section className="glass">
          <div className="dashboard">
            <User />
            <Links />
            <Materia />
          </div>

          <div className="ejer">
            <div className="status">
              <h1>JS-EJERCICIOS</h1>

              <div className="cards">
                <Switch>
                  <Route path={'/inicio'} component={Inicio}></Route>
                  <Route path={'/liniales'} component={Liniales}></Route>
                  <Route path={'/alternativos'} component={Alternativos}></Route>
                  <Route path={'/repeticion'} component={Repeticion}></Route>
                  <Route path={'/otros'} component={Otros}></Route>
                </Switch>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </Router>
  );
}

export default App;
