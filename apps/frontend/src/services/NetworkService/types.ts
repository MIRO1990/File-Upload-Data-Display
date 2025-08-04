export interface HealthCheckResponse {
  message: string;
}

export const allowedBackendUrls = {
  Healthcheck: '/api/health',
} as const;

export type AllowedBackendUrls = (typeof allowedBackendUrls)[keyof typeof allowedBackendUrls];
