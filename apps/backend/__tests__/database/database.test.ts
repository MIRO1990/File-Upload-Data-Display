/// <reference types="jest" />

import { database } from '../../database/Database.js';
import type { Asset } from '../../database/entities/Asset.js';
import type { CompanyId } from '../../database/entities/Company.js';

describe('Database', () => {
  const companyA: CompanyId = 'company-a' as CompanyId;
  const companyB: CompanyId = 'company-b' as CompanyId;

  const asset1: Asset = { address: 'asset-1', latitude: 1, longitude: 1 };
  const asset2: Asset = { address: 'asset-2', latitude: 2, longitude: 2 };
  const asset3: Asset = { address: 'asset-3', latitude: 3, longitude: 3 };

  describe('addAssets & getAssets', () => {
    it('should return assets for a specific company', () => {
      database.addAssets(companyA, [asset1, asset2]);

      expect(database.getAssets(companyA)).toEqual([asset1, asset2]);
    });

    it('should return empty array if company has no assets', () => {
      expect(database.getAssets(companyA)).toEqual([]);
    });

    it('should return all assets when no companyId is provided', () => {
      database.addAssets(companyA, [asset1]);
      database.addAssets(companyB, [asset2, asset3]);

      const allAssets = database.getAssets();
      expect(allAssets).toEqual(expect.arrayContaining([asset1, asset2, asset3]));
      expect(allAssets).toHaveLength(3);
    });
  });

  describe('getCompanyIds', () => {
    it('should return company IDs when assets are added', () => {
      database.addAssets(companyA, [asset1]);
      database.addAssets(companyB, [asset2]);

      expect(database.getCompanyIds()).toEqual(expect.arrayContaining([companyA, companyB]));
    });

    it('should return empty array if no companies exist', () => {
      expect(database.getCompanyIds()).toEqual([]);
    });
  });

  describe('clear', () => {
    it('should remove all assets and companies', () => {
      database.addAssets(companyA, [asset1]);
      database.clear();

      expect(database.getAssets()).toEqual([]);
      expect(database.getCompanyIds()).toEqual([]);
    });
  });
});
