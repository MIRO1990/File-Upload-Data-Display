import { useContext } from 'react';
import { AssetContext, type AssetContextType } from './AssetsContext';

export const useAssetContext = (): AssetContextType => {
  const context = useContext(AssetContext);
  if (!context) {
    throw new Error('useAssetContext must be used within an AssetProvider');
  }
  return context;
};
