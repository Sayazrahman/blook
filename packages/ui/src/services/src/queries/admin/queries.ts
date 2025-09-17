
import { useQuery } from "@tanstack/react-query";
import { AdminApi } from "../../api";

export const useGetRequestForDemo = () => {
  return useQuery({
    queryKey: ["requestForDemo"],
    queryFn: () => AdminApi.getAllRequestForDemo(),
    staleTime: 5 * 60 * 1000,
    select: (response: { results?: { response?: any } }): any =>
      response?.results?.response || [],
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};
