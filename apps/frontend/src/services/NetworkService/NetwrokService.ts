import { allowedBackendUrls, type AllowedBackendUrls, type HealthCheckResponse } from './types';

const fetchFromBackend = async <T = unknown>(url: AllowedBackendUrls): Promise<T | undefined> => {
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
};

export const healthCheck = async (): Promise<string | undefined> => {
  const response = await fetchFromBackend<HealthCheckResponse>(allowedBackendUrls.Healthcheck);
  return response?.message;
};
