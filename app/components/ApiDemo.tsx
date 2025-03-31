"use client";

import { useApiClient } from "@/lib/api-client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SignedIn, SignedOut } from "@clerk/nextjs";

interface ApiResponse {
  userId: string;
  message: string;
  timestamp: string;
}

export function ApiDemo() {
  const apiClient = useApiClient();
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFromApi = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Using a mock external API for demonstration
      // In a real app, you would use your actual backend API URL
      const data = await apiClient.get<ApiResponse>("/example", {
        toastOnError: true,
      });
      setResponse(data);
    } catch (err) {
      const error = err as { message?: string };
      setError(error.message || "An error occurred. This is a mock API call and will not succeed without a real backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-lg border p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">API Client Demo</h2>
      
      <SignedIn>
        <div className="space-y-4">
          <div className="text-sm text-muted-foreground mb-4">
            <p>This demonstrates how to use the API client to call your backend.</p>
            <p className="mt-1">Configure <code className="bg-muted px-1 py-0.5 rounded">NEXT_PUBLIC_API_BASE_URL</code> in your .env file to point to your actual backend.</p>
          </div>
          
          <Button 
            onClick={fetchFromApi} 
            disabled={loading}
          >
            {loading ? "Loading..." : "Call External API"}
          </Button>
          
          {error && (
            <div className="p-4 bg-red-50 text-red-600 rounded-md">
              {error}
            </div>
          )}
          
          {response && (
            <div className="p-4 bg-green-50 text-green-800 rounded-md">
              <pre className="text-sm overflow-auto">
                {JSON.stringify(response, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </SignedIn>
      
      <SignedOut>
        <p className="text-muted-foreground">
          Sign in to test the API client functionality
        </p>
      </SignedOut>
    </div>
  );
} 