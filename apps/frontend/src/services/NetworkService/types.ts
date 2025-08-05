export interface HealthCheckResponse {
  message: string;
}

export const allowedBackendUrls = {
  Healthcheck: '/api/health',
  Assets: '/api/assets',
  Companies: '/api/companies',
} as const;

export type AllowedBackendUrls = (typeof allowedBackendUrls)[keyof typeof allowedBackendUrls];
