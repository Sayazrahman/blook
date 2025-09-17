import { spaceOwnerApi } from "../../api/spaceOwner.api";
import { useQuery } from "@tanstack/react-query";
  interface SpaceType {
    id: string;
    name: string;
    description: string;
    fields: any[];
    brandingZones: any[];
    isActive: boolean;
  }

export const useSpaceOwnerProfile = (spaceOwnerId: string) => {


  return useQuery({
    queryKey: ["spaceOwnerProfile", spaceOwnerId],
    queryFn: () => spaceOwnerApi.getSpaceOwnerprofile(spaceOwnerId),
    staleTime: 5 * 60 * 1000,
    select: (response: { results?: { response?: unknown } }) =>
      response?.results?.response || null,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};
export const useSpaceListingFields = () => {
  return useQuery({
    queryKey: ["spaceListingFields"],
    queryFn: () => spaceOwnerApi.getSpaceListingFields(),
    staleTime: 5 * 60 * 1000,
    select: (response: { results?: { response?: SpaceType[] } }): SpaceType[] =>
      response?.results?.response || [],
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};
export const useSpaceListingDynamicFields = (spaceTypeId: string) => {
  return useQuery({
    queryKey: ["spaceListingDynamicFields", spaceTypeId],
    queryFn: () => spaceOwnerApi.getSpaceListingDynamicFields(spaceTypeId),
    staleTime: 5 * 60 * 1000,
    select: (response: { results?: { response?: any } }): any =>
      response?.results?.response.fields || [],
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    enabled: !!spaceTypeId,
  });
};
export const useBrandingZoneList = (spaceTypeId: string) => {
  return useQuery({
    queryKey: ["brandingZoneBySpaceType", spaceTypeId],
    queryFn: () => spaceOwnerApi.getBrandingZoneBySpaceType(spaceTypeId),
    staleTime: 5 * 60 * 1000,
    select: (response: { results?: { response?: any } }): any =>
      response?.results?.response || [],
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    enabled: !!spaceTypeId,
  });
};

// export const useSpaceOwner = (id: string) => {
//   return useQuery({
//     queryKey: ["spaceOwner", id],
//     queryFn: () => spaceOwnerApi.getById(id),
//     staleTime: 3 * 60 * 1000, // 3 minutes
//     select: (response) => response?.data || null,
//     refetchOnMount: false,
//     refetchOnWindowFocus: false,
//     refetchOnReconnect: false,
//     enabled: !!id,
//   });
// };

export const useSpaceOwners = () => {
  return useQuery({
    queryKey: ["spaceOwners"],
    queryFn: () => spaceOwnerApi.getSpaceOwnersList(),
    staleTime: 2 * 60 * 1000,
    select: (response) => response?.data || [],
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};

// export const useSpaceOwnerSpaces = (spaceOwnerId: string) => {
//   return useQuery({
//     queryKey: ["spaceOwnerSpaces", spaceOwnerId],
//     queryFn: () => spaceOwnerApi.getSpaces(spaceOwnerId),
//     staleTime: 3 * 60 * 1000, // 3 minutes
//     select: (response) => response?.data || [],
//     refetchOnMount: false,
//     refetchOnWindowFocus: false,
//     refetchOnReconnect: false,
//     enabled: !!spaceOwnerId,
//   });
// };

// export const useSpaceOwnerBookings = (spaceOwnerId: string) => {
//   return useQuery({
//     queryKey: ["spaceOwnerBookings", spaceOwnerId],
//     queryFn: () => spaceOwnerApi.getBookings(spaceOwnerId),
//     staleTime: 1 * 60 * 1000, // 1 minute
//     select: (response) => response?.data || [],
//     refetchOnMount: false,
//     refetchOnWindowFocus: false,
//     refetchOnReconnect: false,
//     enabled: !!spaceOwnerId,
//   });
// };
