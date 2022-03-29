import { ReactNode } from 'react';
import { DarkModeProvider } from './theme';

type globalContextProps = {
  children: ReactNode;
};

export const ContextApiProviders = ({ children }: globalContextProps) => {
  return (
    <DarkModeProvider>
      {children}
    </DarkModeProvider>
  );
};
