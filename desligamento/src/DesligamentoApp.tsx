import React from 'react';
import { DesligamentoUserInfo } from './components/DesligamentoUserInfo';

const DesligamentoApp = () => {
  return (
    <div className="desligamento-app">
      <h2>Módulo de Desligamento</h2>
      <DesligamentoUserInfo />
      {/* Resto do conteúdo do módulo */}
    </div>
  );
};

export default DesligamentoApp;
