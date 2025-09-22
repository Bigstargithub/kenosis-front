export const checkAuthCodeApi = async ({
  auth_code,
}: {
  auth_code: string;
}) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/code`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ auth_code }),
  });

  return res.json();
};
