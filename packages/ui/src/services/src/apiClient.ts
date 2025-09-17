interface ApiClientConfig {
  baseUrl: string;
  headers?: Record<string, string>;
}

interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
  results?: unknown;
}

class ApiError extends Error {
  status: number;
  response?: Response;

  constructor(message: string, status: number, response?: Response) {
    super(message);
    this.status = status;
    this.response = response;
    this.name = "ApiError";
  }
}

class ApiClient {
  private baseUrl: string;
  private headers: Record<string, string>;

  constructor(
    config: ApiClientConfig = {
      // baseUrl: "https://api.blook.space/api/v1",
      baseUrl: "http://localhost:5000/api/v1",
    }
  ) {
    this.baseUrl = config.baseUrl;
    this.headers = {
      "Content-Type": "application/json",
      ...(config.headers || {}),
    };
  }

  private async request<T>(
    url: string,
    method: string,
    body?: unknown,
    customHeaders?: Record<string, string>
  ): Promise<ApiResponse<T>> {
    const token = localStorage.getItem("authToken");

    const isFormData =
      typeof FormData !== "undefined" && body instanceof FormData;

    const headers: Record<string, string> = {
      ...(this.headers || {}),
      ...(customHeaders || {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };

    // 🚨 Remove Content-Type for FormData so the browser sets the boundary
    if (isFormData) {
      delete headers["Content-Type"];
      delete headers["content-type"];
    }

    const response = await fetch(`${this.baseUrl}${url}`, {
      method,
      headers,
      body: isFormData
        ? (body as FormData)
        : body
          ? JSON.stringify(body)
          : undefined,
    });

    const contentType = response.headers.get("content-type");
    const isJson = contentType && contentType.includes("application/json");
    const data = isJson ? await response.json() : null;

    if (!response.ok) {
      throw new ApiError(
        data?.results?.message || "API Error",
        response.status,
        response
      );
    }

    return {
      data,
      status: response.status,
      message: data?.message,
      results: data?.results,
    };
  }

  public get<T>(url: string, customHeaders?: Record<string, string>) {
    return this.request<T>(url, "GET", undefined, customHeaders);
  }

  public post<T>(
    url: string,
    body: unknown,
    customHeaders?: Record<string, string>
  ) {
    return this.request<T>(url, "POST", body, customHeaders);
  }

  public put<T>(
    url: string,
    body: unknown,
    customHeaders?: Record<string, string>
  ) {
    return this.request<T>(url, "PUT", body, customHeaders);
  }

  public delete<T>(url: string, customHeaders?: Record<string, string>) {
    return this.request<T>(url, "DELETE", undefined, customHeaders);
  }
  public deleteWithBody<T>(
    url: string,
    body: unknown,
    customHeaders?: Record<string, string>
  ) {
    return this.request<T>(url, "DELETE", body, customHeaders);
  }
}

export const apiClient = new ApiClient({
  baseUrl: "http://localhost:5000/api/v1",
  // baseUrl: "https://api.blook.space/api/v1",
});
export default ApiClient;
export type { ApiResponse };
export { ApiError };
