import React from 'react';
import { useGlobalStore } from 'app_shell/useGlobalStore';

const ClassesApp: React.FC = () => {
  const { user } = useGlobalStore();

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ marginBottom: '2rem', color: '#2c3e50' }}>Gestão de Classes</h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1.5rem'
      }}>
        {[
          { nome: 'Classe A', nivel: 'Júnior', salarioBase: 'R$ 3.000,00' },
          { nome: 'Classe B', nivel: 'Pleno', salarioBase: 'R$ 5.000,00' },
          { nome: 'Classe C', nivel: 'Sênior', salarioBase: 'R$ 8.000,00' },
          { nome: 'Classe D', nivel: 'Especialista', salarioBase: 'R$ 12.000,00' }
        ].map((classe, index) => (
          <div key={index} style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>{classe.nome}</h3>
            <p style={{ color: '#666', margin: '0.5rem 0' }}>
              <strong>Nível:</strong> {classe.nivel}
            </p>
            <p style={{ color: '#666', margin: '0.5rem 0' }}>
              <strong>Salário Base:</strong> {classe.salarioBase}
            </p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '2rem', color: '#666' }}>
        <p>Usuário logado: {user?.name}</p>
      </div>
    </div>
  );
};

export default ClassesApp; 