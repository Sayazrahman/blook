
import { useMutation } from "@tanstack/react-query";
import { AdminApi } from "../../api";

export const useRequestForDemo = () => {
  return useMutation({
    mutationFn: (payload: any) => AdminApi.postRequestForDemo(payload),
    onSuccess: () => {
      console.log("Request for demo send successfully");
    },
    onError: (error) => {
      console.error("Request for demo failed:", error);
    },
  });
};
