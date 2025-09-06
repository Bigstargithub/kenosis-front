import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/app/apis/auth/auth";
import { useRouter } from "next/navigation";

export const useAccessToken = () => {
  const queryClient = useQueryClient();
  const accessToken = queryClient.getQueryData(["accessToken"]);
  const setAccessToken = (accessToken: string) => {
    queryClient.setQueryData(["accessToken"], accessToken);
  };
  return { accessToken, setAccessToken };
};

export const useLoginHook = ({ path }: { path: string }) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      const data = await useAuth({ email, password });
      return data;
    },
    onSuccess: (data: { token: string; refreshToken: string }) => {
      console.log("data: ", data);
      queryClient.setQueryData(["accessToken"], data.token);
      queryClient.setQueryData(["refreshToken"], data.refreshToken);
      return router.push(path);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
