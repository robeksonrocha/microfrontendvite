import React from 'react';
// @ts-ignore
import { useGlobalStore } from 'app_shell/useGlobalStore';

export const DesligamentoUserInfo = () => {
  const { user } = useGlobalStore();

  return (
    <div className="desligamento-user-info" style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '4px', marginTop: '20px' }}>
      <h4>Informações do Usuário no Módulo Desligamento</h4>
      {user ? (
        <>
          <p>Bem-vindo, {user.name}!</p>
          <p>Email: {user.email}</p>
          <p>Nível de acesso: {user.role}</p>
        </>
      ) : (
        <p>Usuário não autenticado no módulo Desligamento</p>
      )}
    </div>
  );
}; 