import { apiClient, ApiResponse } from "../apiClient";


export const AdminApi = {
  postRequestForDemo: async (
    payload: unknown
  ): Promise<ApiResponse<unknown>> => {
    return await apiClient.post("/requestForDemo", payload);
  },

  getAllRequestForDemo: async (): Promise<ApiResponse<unknown>> => {
    return await apiClient.get(`/allRequestForDemo`);
  },
};
