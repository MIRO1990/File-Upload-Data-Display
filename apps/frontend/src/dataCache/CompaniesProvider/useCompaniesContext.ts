import { useContext } from 'react';
import { CompaniesContext, type CompaniesContextType } from './CompaniesContext';

export const useCompaniesContext = (): CompaniesContextType => {
  const context = useContext(CompaniesContext);
  if (!context) {
    throw new Error('useCompaniesContext must be used within a CompaniesProvider');
  }
  return context;
};
