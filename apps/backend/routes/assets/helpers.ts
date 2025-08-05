import type { Asset } from '../../database/entities/Asset.js';

export const normalizeAndParseAssets = (
  rawData: Array<Record<string, unknown>>,
): Array<Record<string, unknown>> => {
  return rawData.map(asset => {
    const normalized: Record<string, unknown> = {};

    for (const key in asset) {
      const normalizedKey = key.toLowerCase().replace(/\s+/g, '');
      normalized[normalizedKey] = asset[key];
    }

    return normalized;
  });
};

export const isValidAsset = (asset: Record<string, unknown>): asset is Asset => {
  return (
    asset['address'] !== undefined &&
    asset['latitude'] !== undefined &&
    asset['longitude'] !== undefined
  );
};
