import React from 'react';
import { useGlobalStore } from '../store/useGlobalStore';

const Header: React.FC = () => {
  const { user } = useGlobalStore();

  return (
    <header style={{
      backgroundColor: '#1a56db',
      color: 'white',
      padding: '0.75rem 1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{ 
        fontSize: '1.25rem', 
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <span style={{ fontSize: '1.5rem' }}>⚡</span>
        Sistema Corporativo
      </div>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center',
        gap: '0.75rem'
      }}>
        <span>Bem-vindo, {user?.name || 'Usuário'}</span>
        <div style={{
          width: '32px',
          height: '32px',
          backgroundColor: '#3b82f6',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.25rem'
        }}>
          U
        </div>
      </div>
    </header>
  );
};

export default Header;
