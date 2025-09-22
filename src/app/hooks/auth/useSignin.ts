import { useMutation } from "@tanstack/react-query";
import { checkAuthCodeApi } from "@/app/apis/auth/signin";

export const useCheckAuthCode = (setState: (state: boolean) => void) => {
  return useMutation({
    mutationFn: async ({ auth_code }: { auth_code: string }) => {
      const res = await checkAuthCodeApi({ auth_code });
      return res;
    },
    onSuccess: () => {
      setState(true);
    },
    onError: () => {
      setState(false);
    },
  });
};
