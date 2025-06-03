import React from 'react';

interface SidebarProps {
  onSelectModule: (module: 'cargo' | 'desligamento' | null) => void;
  activeModule: 'cargo' | 'desligamento' | null;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectModule, activeModule }) => {
  return (
    <nav
      style={{
        width: 250,
        backgroundColor: '#2c3e50',
        padding: '2rem 1rem',
        color: 'white',
        borderRight: '1px solid #34495e',
      }}
    >
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li
          style={{
            padding: '1rem',
            marginBottom: '0.5rem',
            cursor: 'pointer',
            backgroundColor: activeModule === 'cargo' ? '#34495e' : 'transparent',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
          }}
          onClick={() => onSelectModule('cargo')}
        >
          <span style={{ marginRight: '10px' }}>📦</span>
          Cargo Module
        </li>
        <li
          style={{
            padding: '1rem',
            cursor: 'pointer',
            backgroundColor: activeModule === 'desligamento' ? '#34495e' : 'transparent',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
          }}
          onClick={() => onSelectModule('desligamento')}
        >
          <span style={{ marginRight: '10px' }}>🔚</span>
          Desligamento Module
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
