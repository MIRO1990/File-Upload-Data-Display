import type { Asset } from '../../database/entities/Asset.js';

export const normalizeAndParseAssets = (rawData: any[]): Array<Record<string, any>> => {
  return rawData.map(asset => {
    const normalized: Record<string, any> = {};

    for (const key in asset) {
      const normalizedKey = key.toLowerCase().replace(/\s+/g, '');
      normalized[normalizedKey] = asset[key];
    }

    return normalized;
  });
};

export const isValidAsset = (asset: Record<string, any>): asset is Asset => {
  return (
    asset['address'] !== undefined &&
    asset['latitude'] !== undefined &&
    asset['longitude'] !== undefined
  );
};
