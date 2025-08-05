// File: src/context/AssetContext.tsx
import React, { useState, useCallback } from 'react';
import { NetworkService } from '../../services/NetworkService';
import type { Asset, CompanyId } from '../../entities';
import { AssetContext } from './AssetsContext';

export const AssetProvider: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [assets, setAssets] = useState<Asset[]>([]);

  const refreshAssets = useCallback(async (companyId?: CompanyId) => {
    const data = await NetworkService.getAssets(companyId);
    if (data) {
      setAssets(data);
    }
  }, []);

  return (
    <AssetContext.Provider value={{ assets, refreshAssets }}>{children}</AssetContext.Provider>
  );
};
