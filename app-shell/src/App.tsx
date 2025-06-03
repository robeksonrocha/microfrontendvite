import React, { Suspense, useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Login from './components/Login';
import { useGlobalStore } from './store/useGlobalStore';

// @ts-ignore
const CargoApp = React.lazy(() => import('cargo/CargoApp'));
// @ts-ignore
const DesligamentoApp = React.lazy(() => import('desligamento/DesligamentoApp'));

const App = () => {
  const [activeModule, setActiveModule] = useState<'cargo' | 'desligamento' | null>(null);
  const { user } = useGlobalStore();

  if (!user) {
    return <Login />;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar onSelectModule={setActiveModule} activeModule={activeModule} />
        <main style={{ flex: 1, padding: '20px' }}>
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
