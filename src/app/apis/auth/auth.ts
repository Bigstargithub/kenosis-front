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
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });
  return res.json();
};

export const useRefreshTokenApi = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/refreshToken`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );
  return res.json();
};