import React from 'react';
import { CargoUserInfo } from './components/CargoUserInfo';

const CargoApp = () => {
  return (
    <div className="cargo-app">
      <h2>Módulo de Cargo</h2>
      <CargoUserInfo />
      {/* Resto do conteúdo do módulo */}
    </div>
  );
};

export default CargoApp;