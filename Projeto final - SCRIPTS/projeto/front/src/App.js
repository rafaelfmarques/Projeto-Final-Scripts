import React, { useState } from 'react';
import Header from './components/Header';
import rotas from './components/routes';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Logado from './components/Contexto';

export default function App() {

  const [sessao, setSessao] = useState(false)
  return (
    <BrowserRouter>
      <Logado.Provider value={{ sessao, setSessao }}>
        <Header />
        <Switch>
          {rotas.map((rota, indice) => (
            <Route key={indice} {...rota} />
          ))}
        </Switch>
      </Logado.Provider>
    </BrowserRouter>
  );
}
