import { useAuth } from "@clerk/nextjs";
import { toast } from "sonner";

export type ApiClientOptions = {
  toastOnError?: boolean;
  headers?: Record<string, string>;
};

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface ApiError {
  message: string;
  [key: string]: unknown;
}

export function useApiClient() {
  const { getToken } = useAuth();

  const request = async <T = unknown>(
    method: HttpMethod,
    path: string,
    options: ApiClientOptions = {},
    body?: Record<string, unknown>
  ): Promise<T> => {
    try {
      const token = await getToken();
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";
      
      // Ensure path starts with '/' for consistency
      const normalizedPath = path.startsWith('/') ? path : `/${path}`;
      
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
        ...options.headers,
      };
      
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }

      const response = await fetch(`${baseUrl}${normalizedPath}`, {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({
          message: `Server returned ${response.status} ${response.statusText}`,
        })) as ApiError;
        throw errorData;
      }

      return (await response.json().catch(() => ({}))) as T;
    } catch (error) {
      const apiError = error as ApiError;
      if (options.toastOnError) {
        toast.error(apiError.message || "An unexpected error occurred");
      }
      throw apiError;
    }
  };

  return {
    get: <T = unknown>(path: string, options?: ApiClientOptions) => 
      request<T>("GET", path, options),
    
    post: <T = unknown>(path: string, body?: Record<string, unknown>, options?: ApiClientOptions) => 
      request<T>("POST", path, options, body),
    
    put: <T = unknown>(path: string, body?: Record<string, unknown>, options?: ApiClientOptions) => 
      request<T>("PUT", path, options, body),
    
    patch: <T = unknown>(path: string, body?: Record<string, unknown>, options?: ApiClientOptions) => 
      request<T>("PATCH", path, options, body),
    
    delete: <T = unknown>(path: string, options?: ApiClientOptions) => 
      request<T>("DELETE", path, options),
  };
} 