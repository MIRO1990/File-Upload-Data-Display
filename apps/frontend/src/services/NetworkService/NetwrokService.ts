import type { Asset, CompanyId } from '../../entities';
import { allowedBackendUrls, type AllowedBackendUrls, type HealthCheckResponse } from './types';

export class NetworkService {
  static async fetchFromBackend<T = unknown>(url: AllowedBackendUrls): Promise<T | undefined> {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        console.error('Fetch error:', response.statusText);
        return;
      }

      const data: T = await response.json();
      return data;
    } catch (error: unknown) {
      console.error('JSON parsing error:', error);
      return;
    }
  }

  static async healthCheck(): Promise<string | undefined> {
    const response = await this.fetchFromBackend<HealthCheckResponse>(
      allowedBackendUrls.Healthcheck,
    );
    return response?.message;
  }

  static async getAssets(companyId?: CompanyId): Promise<Asset[] | undefined> {
    const response = await this.fetchFromBackend<Asset[]>(allowedBackendUrls.Assets);
    return response;
  }

  static async getCompanyIds(): Promise<CompanyId[] | undefined> {
    const response = await this.fetchFromBackend<CompanyId[]>(allowedBackendUrls.Companies);
    return response;
  }
}
