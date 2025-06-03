import React from 'react';
import { useGlobalStore } from '../store/useGlobalStore';

const Header: React.FC = () => {
  const { user, clearUser } = useGlobalStore();

  return (
    <header style={{
      backgroundColor: '#2c3e50',
      color: 'white',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        Microfrontend App
      </div>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center',
        gap: '1rem'
      }}>
        <div>
          <span style={{ marginRight: '0.5rem' }}>👤</span>
          {user?.name}
        </div>
        <button
          onClick={clearUser}
          style={{
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
        >
          Sair
        </button>
      </div>
    </header>
  );
};

export default Header;
