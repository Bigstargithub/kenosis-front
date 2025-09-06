import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAuth = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
};

export const useRefreshToken = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/refresh`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            refresh_token: queryClient.getQueryData(["refresh_token"]),
          }),
        }
      );
      return res.json();
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["accessToken"], data.token);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
