import { useCallback, useState } from 'react';
import type { CompanyId } from '../../entities';
import { NetworkService } from '../../services';
import { CompaniesContext } from './CompaniesContext';

export const CompaniesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [companyIds, setCompanyIds] = useState<CompanyId[]>([]);

  const refreshCompanies = useCallback(async () => {
    const data = await NetworkService.getCompanyIds();
    if (data) {
      setCompanyIds(data);
    }
  }, []);

  return (
    <CompaniesContext.Provider value={{ companyIds, refreshCompanies }}>
      {children}
    </CompaniesContext.Provider>
  );
};
