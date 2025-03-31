/**
 * Common types used across the project
 */

/**
 * Common API response structure
 */
export interface ApiResponse<T = unknown> {
  data: T;
  success: boolean;
  message?: string;
  errors?: Record<string, string[]>;
}

/**
 * Pagination metadata
 */
export interface PaginationMeta {
  currentPage: number;
  totalPages: number;
  perPage: number;
  total: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

/**
 * Paginated response structure
 */
export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  meta: PaginationMeta;
}

/**
 * Sort direction for queries
 */
export type SortDirection = 'asc' | 'desc';

/**
 * Common filter parameters for API requests
 */
export interface FilterParams {
  page?: number;
  perPage?: number;
  sortBy?: string;
  sortDir?: SortDirection;
  search?: string;
  [key: string]: unknown;
} 