import { apiClient, ApiResponse } from "../apiClient";

interface RazorpayOrderPayload {
  amount: number;
  currency: string;
  planName: string;
  planId: string;
  spaceOwnerId: string;
}

interface VerifyPaymentPayload {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
  spaceOwnerId: string;
  planId?: string;
}

export const spaceOwnerApi = {
  postSpaceOwner: async (payload: unknown): Promise<ApiResponse<unknown>> => {
    return await apiClient.post("/space-owners/register", payload);
  },

  postSpaceOwnerDocuments: async (
    contactPerson: string,
    payload: FormData
  ): Promise<ApiResponse<unknown>> => {
    return await apiClient.post(
      `/upload/documents?contactPerson=${encodeURIComponent(contactPerson)}`,
      payload
    );
  },

  postSpaceListingPhotos: async (
    payload: FormData
  ): Promise<ApiResponse<unknown>> => {
    return await apiClient.post(`/upload/photos`, payload);
  },

  postLoginSpaceOwner: async (
    payload: unknown
  ): Promise<ApiResponse<unknown>> => {
    return await apiClient.post("/space-owners/login", payload);
  },

  postSpaceListing: async (payload: unknown): Promise<ApiResponse<unknown>> => {
    return await apiClient.post("/spaces", payload);
  },

  putSpaceOwner: async (
    spaceOwnerId: string,
    payload: unknown
  ): Promise<ApiResponse<unknown>> => {
    return await apiClient.put(
      `/space-owners/updateProfile/${spaceOwnerId}`,
      payload
    );
  },

  getSpaceOwnerprofile: async (
    spaceOwnerId: string
  ): Promise<ApiResponse<unknown>> => {
    return await apiClient.get(`/space-owners/getProfile/${spaceOwnerId}`);
  },
  getSpaceOwnerDashboardDetails: async (
    spaceOwnerId: string
  ): Promise<ApiResponse<unknown>> => {
    return await apiClient.get(`/space-owners/dashboard/${spaceOwnerId}`);
  },
  getSpaceDetailsByOwnerId: async (
    spaceOwnerId: string
  ): Promise<ApiResponse<unknown>> => {
    return await apiClient.get(`/spaces/owner/${spaceOwnerId}`);
  },
  getSpaceCategory: async (
  ): Promise<ApiResponse<unknown>> => {
    return await apiClient.get(`/allCategory`);
  },
  getSpaceListingFields: async (
  ): Promise<ApiResponse<unknown>> => {
    return await apiClient.get(`/spaceFormDetails`);
  },
  getSpaceListingDynamicFields: async (spaceTypeId: string
  ): Promise<ApiResponse<unknown>> => {
    return await apiClient.get(`/spaceFormDetails/${spaceTypeId}`);
  },
  getBrandingZoneBySpaceType: async (spaceTypeId: string
  ): Promise<ApiResponse<unknown>> => {
    return await apiClient.get(`/space-types/${spaceTypeId}/branding-zones`);
  },

  getSpaceOwnersList: async (): Promise<ApiResponse<unknown>> => {
    return await apiClient.get(`/admin/space-owners/all`);
  },

  getAllSubscriptionPlan: async (): Promise<ApiResponse<unknown>> => {
    return await apiClient.get(`/plans`);
  },

  createOrder: async (
    payload: RazorpayOrderPayload
  ): Promise<ApiResponse<any>> => {
    return await apiClient.post("/create-order", payload);
  },

  verifyPayment: async (
    payload: VerifyPaymentPayload
  ): Promise<ApiResponse<any>> => {
    return await apiClient.post("/verify-payment", payload);
  },
};
