import { companyIdQueryParam, type Asset, type CompanyId } from '../../entities';
import {
  allowedBackendUrls,
  type AllowedBackendMethods,
  type AllowedBackendUrls,
  type HealthCheckResponse,
} from './types';

export class NetworkService {
  static async request<T = unknown>(
    url: AllowedBackendUrls,
    options?: {
      method?: AllowedBackendMethods;
      body?: BodyInit;
      queryParams?: string;
    },
  ): Promise<T | undefined> {
    try {
      const fullUrl = url + (options?.queryParams || '');

      const response = await fetch(fullUrl, {
        method: options?.method || 'GET',
        body: options?.body,
      });

      if (!response.ok) {
        console.error(`Request to ${fullUrl} failed:`, response.statusText);
        return;
      }

      const data: T = await response.json();
      return data;
    } catch (error) {
      console.error('Network error:', error);
      return;
    }
  }

  static async healthCheck(): Promise<string | undefined> {
    const response = await this.request<HealthCheckResponse>(allowedBackendUrls.Healthcheck);
    return response?.message;
  }

  static async getAssets(companyId?: CompanyId): Promise<Asset[] | undefined> {
    const query = companyId ? `?${companyIdQueryParam}=${companyId}` : '';
    return await this.request<Asset[]>(allowedBackendUrls.Assets, { queryParams: query });
  }

  static async getCompanyIds(): Promise<CompanyId[] | undefined> {
    return await this.request<CompanyId[]>(allowedBackendUrls.Companies);
  }

  static async uploadAssets(companyId: CompanyId, file: File): Promise<string | undefined> {
    const formData = new FormData();
    formData.append(companyIdQueryParam, companyId);
    formData.append('assetFile', file);

    const response = await this.request<{ message: string }>(allowedBackendUrls.Upload, {
      method: 'POST',
      body: formData,
    });

    return response?.message;
  }
}
