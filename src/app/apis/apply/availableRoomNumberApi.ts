export const availableEndDateApi = async (
  startDate: string,
  endDate: string
) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/apply/available-room?start_date=${startDate}&end_date=${endDate}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );
  return await res.json();
};
