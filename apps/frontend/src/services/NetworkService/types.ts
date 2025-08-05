export interface HealthCheckResponse {
  message: string;
}

export const allowedBackendUrls = {
  Healthcheck: '/api/health',
  Assets: '/api/assets',
  Companies: '/api/companies',
  Upload: '/api/assets/upload',
} as const;

export type AllowedBackendUrls = (typeof allowedBackendUrls)[keyof typeof allowedBackendUrls];

export type AllowedBackendMethods = 'GET' | 'POST';
