import React from 'react';
import { useGlobalStore } from '../store/useGlobalStore';

export const UserInfo = () => {
  const { user, setUser, clearUser } = useGlobalStore();

  const handleLogin = () => {
    // Simulando um login
    setUser({
      id: '1',
      name: 'João Silva',
      email: 'joao@exemplo.com',
      role: 'admin'
    });
  };

  return (
    <div className="user-info" style={{ 
      padding: '20px', 
      border: '1px solid #ddd', 
      borderRadius: '4px',
      backgroundColor: '#f9f9f9',
      marginBottom: '20px'
    }}>
      <h3 style={{ marginTop: 0 }}>Status do Usuário</h3>
      {user ? (
        <>
          <div style={{ marginBottom: '15px' }}>
            <p style={{ margin: '5px 0' }}><strong>Nome:</strong> {user.name}</p>
            <p style={{ margin: '5px 0' }}><strong>Email:</strong> {user.email}</p>
            <p style={{ margin: '5px 0' }}><strong>Cargo:</strong> {user.role}</p>
          </div>
          <button 
            onClick={clearUser}
            style={{
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <p>Usuário não autenticado</p>
          <button 
            onClick={handleLogin}
            style={{
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Login
          </button>
        </>
      )}
    </div>
  );
}; 