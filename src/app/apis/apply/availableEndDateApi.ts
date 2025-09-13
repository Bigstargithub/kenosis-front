export const availableEndDateApi = async (startDate: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/apply/availableEndDate?start_date=${startDate}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await res.json();
};