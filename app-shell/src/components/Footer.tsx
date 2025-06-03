import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      borderTop: '1px solid #e5e7eb',
      padding: '1rem',
      textAlign: 'center',
      color: '#6b7280',
      fontSize: '0.875rem',
      backgroundColor: 'white'
    }}>
      <div>© 2024 Sistema Corporativo. Todos os direitos reservados.</div>
      <div style={{ marginTop: '0.5rem' }}>
        Versão 1.0.0 | Suporte: suporte@empresa.com
      </div>
    </footer>
  );
};

export default Footer; 