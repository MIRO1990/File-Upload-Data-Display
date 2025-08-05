import { createContext } from 'react';
import type { CompanyId } from '../../entities';

export type CompaniesContextType = {
  companyIds: CompanyId[];
  refreshCompanies: () => Promise<void>;
};
export const CompaniesContext = createContext<CompaniesContextType | undefined>(undefined);
