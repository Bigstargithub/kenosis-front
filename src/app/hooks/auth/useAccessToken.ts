import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { useAuth, useRefreshTokenApi } from "@/app/apis/auth/auth";
import { useRouter } from "next/navigation";

export const useAccessToken = () => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["accessToken"],
    queryFn: () => {
      return queryClient.getQueryData(["accessToken"]) ?? null;
    },
  });
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
    onSuccess: (data: { accessToken: string; }) => {
      queryClient.setQueryData(["accessToken"], data.accessToken);
      return router.push(path);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export const useRefreshToken = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const data = await useRefreshTokenApi();
      return data;
    },
    onSuccess: (data: { accessToken: string; }) => {
      queryClient.setQueryData(["accessToken"], data.accessToken);
    },
    onError: (error) => {
      queryClient.setQueryData(["accessToken"], null);
      console.log(error);
    },
  });
}