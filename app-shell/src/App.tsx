import React, { Suspense, useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Footer from './components/Footer';
import { useGlobalStore } from './store/useGlobalStore';

// @ts-ignore
const CargoApp = React.lazy(() => import('cargo/CargoApp'));
// @ts-ignore
const DesligamentoApp = React.lazy(() => import('desligamento/DesligamentoApp'));
// @ts-ignore
const ClassesApp = React.lazy(() => import('classes/ClassesApp'));

const App = () => {
  const [activeModule, setActiveModule] = useState<'dashboard' | 'cargo' | 'desligamento' | 'classes' | null>('dashboard');
  const { user } = useGlobalStore();

  if (!user) {
    return <Login />;
  }

  const renderContent = () => {
    switch (activeModule) {
      case 'dashboard':
        return <Dashboard />;
      case 'cargo':
        return (
          <Suspense fallback={<div>Carregando módulo de Cargos...</div>}>
            <CargoApp />
          </Suspense>
        );
      case 'desligamento':
        return (
          <Suspense fallback={<div>Carregando módulo de Desligamentos...</div>}>
            <DesligamentoApp />
          </Suspense>
        );
      case 'classes':
        return (
          <Suspense fallback={<div>Carregando módulo de Classes...</div>}>
            <ClassesApp />
          </Suspense>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100vh',
      backgroundColor: '#f3f4f6'
    }}>
      <Header />
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Sidebar onSelectModule={setActiveModule} activeModule={activeModule} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <main style={{ 
            flex: 1, 
            padding: '2rem',
            overflowY: 'auto'
          }}>
            {renderContent()}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
