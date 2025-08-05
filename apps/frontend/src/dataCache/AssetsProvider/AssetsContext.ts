import { createContext } from 'react';
import type { Asset, CompanyId } from '../../entities';

export type AssetContextType = {
  assets: Asset[];
  refreshAssets: (companyId?: CompanyId) => Promise<void>;
};

export const AssetContext = createContext<AssetContextType | undefined>(undefined);
