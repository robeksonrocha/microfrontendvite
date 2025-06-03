import React, { Suspense, useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { UserInfo } from './components/UserInfo';

// @ts-ignore
const CargoApp = React.lazy(() => import('cargo/CargoApp'));
// @ts-ignore
const DesligamentoApp = React.lazy(() => import('desligamento/DesligamentoApp'));

const App = () => {
  const [activeModule, setActiveModule] = useState<'cargo' | 'desligamento' | null>(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar onSelectModule={setActiveModule} activeModule={activeModule} />
        <main style={{ flex: 1, padding: '20px' }}>
          <UserInfo />
          <div style={{ marginTop: '20px' }}>
            <button onClick={() => setActiveModule('cargo')} style={{ marginRight: '10px' }}>
              Mostrar Cargo
            </button>
            <button onClick={() => setActiveModule('desligamento')}>
              Mostrar Desligamento
            </button>
          </div>
          <Suspense fallback={<div style={{ marginTop: '20px' }}>Carregando módulo...</div>}>
            {activeModule === 'cargo' && <CargoApp />}
            {activeModule === 'desligamento' && <DesligamentoApp />}
          </Suspense>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
