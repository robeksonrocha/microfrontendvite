import React from 'react';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon, color }) => (
  <div style={{
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  }}>
    <div style={{
      backgroundColor: color,
      padding: '1rem',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    }}>
      {icon}
    </div>
    <div>
      <h3 style={{ margin: '0', color: '#666', fontSize: '0.9rem' }}>{title}</h3>
      <p style={{ margin: '0.5rem 0 0 0', fontSize: '1.5rem', fontWeight: 'bold' }}>{value}</p>
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  const recentActivities = [
    { text: 'Novo cargo "Analista de Dados" criado', type: 'cargo' },
    { text: 'Desligamento de João Silva processado', type: 'desligamento' },
    { text: 'Classe "React Avançado" iniciada', type: 'classe' }
  ];

  const nextActions = [
    {
      title: 'Revisão de cargos pendente',
      description: '3 cargos aguardando aprovação',
      color: '#ffd700'
    },
    {
      title: 'Classe iniciando em breve',
      description: '"Segurança da Informação" - 15/04/2024',
      color: '#4169e1'
    }
  ];

  return (
    <div>
      <h1 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>Dashboard Executivo</h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>Visão geral do sistema corporativo</p>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)', 
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        <MetricCard
          title="Total de Cargos"
          value={45}
          icon="👥"
          color="#4299e1"
        />
        <MetricCard
          title="Desligamentos do Mês"
          value={12}
          icon="🚪"
          color="#f56565"
        />
        <MetricCard
          title="Classes Ativas"
          value={8}
          icon="📚"
          color="#48bb78"
        />
        <MetricCard
          title="Taxa de Crescimento"
          value="+5.2%"
          icon="📈"
          color="#9f7aea"
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div style={{ 
          backgroundColor: 'white', 
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#2c3e50', marginTop: 0, fontSize: '1.25rem' }}>Atividades Recentes</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {recentActivities.map((activity, index) => (
              <li key={index} style={{ 
                display: 'flex',
                alignItems: 'center',
                padding: '0.75rem 0',
                borderBottom: index < recentActivities.length - 1 ? '1px solid #edf2f7' : 'none'
              }}>
                <span style={{ marginRight: '0.75rem' }}>
                  {activity.type === 'cargo' ? '👥' : activity.type === 'desligamento' ? '🚪' : '📚'}
                </span>
                {activity.text}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ 
          backgroundColor: 'white', 
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#2c3e50', marginTop: 0, fontSize: '1.25rem' }}>Próximas Ações</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {nextActions.map((action, index) => (
              <div key={index} style={{ 
                padding: '1rem',
                borderLeft: `4px solid ${action.color}`,
                backgroundColor: '#f8fafc'
              }}>
                <h3 style={{ margin: '0', color: '#2c3e50', fontSize: '1rem' }}>{action.title}</h3>
                <p style={{ margin: '0.5rem 0 0 0', color: '#666' }}>{action.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 