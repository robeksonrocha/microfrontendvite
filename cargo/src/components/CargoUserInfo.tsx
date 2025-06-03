import React from 'react';
// @ts-ignore
import { useGlobalStore } from 'app_shell/useGlobalStore';

export const CargoUserInfo = () => {
  const { user } = useGlobalStore();

  return (
    <div className="cargo-user-info" style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '4px', marginTop: '20px' }}>
      <h4>Informações do Usuário no Módulo Cargo</h4>
      {user ? (
        <>
          <p>Bem-vindo, {user.name}!</p>
          <p>Seu cargo: {user.role}</p>
        </>
      ) : (
        <p>Usuário não autenticado no módulo Cargo</p>
      )}
    </div>
  );
}; 