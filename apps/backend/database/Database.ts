import type { Asset } from './entities/Asset.js';
import type { CompanyId } from './entities/Company.js';

export class Database {
  private store: Map<CompanyId, Asset[]> = new Map();

  addAssets(companyId: CompanyId, assets: Asset[]): void {
    const existing = this.store.get(companyId) || [];
    this.store.set(companyId, [...existing, ...assets]);
  }

  getAssets(companyId?: CompanyId): Asset[] {
    if (companyId) {
      return this.store.get(companyId) || [];
    }

    // Return all assets across companies
    return Array.from(this.store.values()).flat();
  }

  getCompanyIds(): string[] {
    return Array.from(this.store.keys());
  }

  clear(): void {
    this.store.clear();
  }
}

export const database = new Database();
