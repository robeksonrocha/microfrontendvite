// app-shell/src/context/SharedContext.tsx
import React, { createContext, useState, useContext } from 'react';

type SharedState = {
  user: string;
  setUser: (user: string) => void;
};

const SharedContext = createContext<SharedState | undefined>(undefined);

export const SharedProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState('Anônimo');
  return (
    <SharedContext.Provider value={{ user, setUser }}>
      {children}
    </SharedContext.Provider>
  );
};

export const useShared = () => {
  const context = useContext(SharedContext);
  if (!context) throw new Error('useShared deve ser usado dentro de SharedProvider');
  return context;
};
