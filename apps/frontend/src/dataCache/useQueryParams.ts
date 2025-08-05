import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { companyIdQueryParam, type CompanyId } from '../entities';

export const useQueryParams = (): { companyId?: CompanyId } => {
  const [searchParams] = useSearchParams();
  const companyId = useMemo<CompanyId | undefined>(
    () => searchParams.get(companyIdQueryParam) || undefined,
    [searchParams],
  );

  return { companyId };
};
