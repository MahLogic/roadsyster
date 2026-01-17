export const API_CONFIG = {
  PORT: process.env.API_PORT || 4000,
  BASE_URL: process.env.API_BASE_URL || 'http://localhost:4000',
  TIMEOUT: 30000,
} as const

export const APP_CONFIG = {
  ENVIRONMENT: process.env.NODE_ENV || 'development',
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  IS_DEVELOPMENT: process.env.NODE_ENV === 'development',
} as const

export const DATABASE_CONFIG = {
  URL:
    process.env.DATABASE_URL ||
    'postgresql://postgres:postgres@localhost:5432/roadsyster',
  MAX_CONNECTIONS: 10,
} as const
