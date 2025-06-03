import React from 'react';

interface SidebarProps {
  onSelectModule: (module: 'dashboard' | 'cargo' | 'desligamento' | 'classes' | null) => void;
  activeModule: 'dashboard' | 'cargo' | 'desligamento' | 'classes' | null;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: '🏠' },
  { id: 'cargo', label: 'Gestão de Cargos', icon: '👥' },
  { id: 'desligamento', label: 'Desligamentos', icon: '🚪' },
  { id: 'classes', label: 'Classes', icon: '📚' }
];

const Sidebar: React.FC<SidebarProps> = ({ onSelectModule, activeModule }) => {
  return (
    <nav
      style={{
        width: 250,
        backgroundColor: '#2c3e50',
        padding: '1rem',
        color: 'white',
        height: '100%'
      }}
    >
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {menuItems.map((item) => (
          <li
            key={item.id}
            style={{
              padding: '0.75rem 1rem',
              marginBottom: '0.25rem',
              cursor: 'pointer',
              backgroundColor: activeModule === item.id ? '#34495e' : 'transparent',
              borderRadius: '8px',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              fontSize: '0.9rem'
            }}
            onClick={() => onSelectModule(item.id as any)}
          >
            <span style={{ marginRight: '12px', fontSize: '1.1rem' }}>{item.icon}</span>
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
