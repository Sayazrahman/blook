import { spaceOwnerApi } from "../../api/spaceOwner.api";

import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useRegisterSpaceOwner = () => {
  return useMutation({
    mutationFn: (payload: any) =>
      spaceOwnerApi.postSpaceOwner(payload),
    onSuccess: () => {
      console.log("Space owner registered successfully");
    },
    onError: (error) => {
      console.error("Registration failed:", error);
    },
  });
};

export const useLoginSpaceOwner = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: any) =>
      spaceOwnerApi.postLoginSpaceOwner(payload),
    onSuccess: (response) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error

      localStorage.setItem("authToken", response?.data?.token);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      localStorage.setItem("refreshToken", response?.data?.refreshToken);

      // Invalidate profile query
      queryClient.invalidateQueries({ queryKey: ["spaceOwnerProfile"] });

    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });
};

// export const useUpdateSpaceOwner = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: (payload: SpaceOwnerUpdatePayload) => spaceOwnerApi.updateProfile(payload),
//     onSuccess: (response) => {
//       // Update profile cache
//       queryClient.setQueryData(["spaceOwnerProfile"], response);

//       // Invalidate related queries
//       queryClient.invalidateQueries({ queryKey: ["spaceOwner"] });
//       queryClient.invalidateQueries({ queryKey: ["spaceOwners"] });

//       console.log('Profile updated successfully');
//     },
//     onError: (error) => {
//       console.error('Update failed:', error);
//     },
//   });
// };

// export const useChangeSpaceOwnerPassword = () => {
//   return useMutation({
//     mutationFn: (payload: { currentPassword: string; newPassword: string }) =>
//       spaceOwnerApi.changePassword(payload),
//     onSuccess: () => {
//       console.log('Password changed successfully');
//     },
//     onError: (error) => {
//       console.error('Password change failed:', error);
//     },
//   });
// };
