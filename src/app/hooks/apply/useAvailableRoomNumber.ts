import { useQuery } from "@tanstack/react-query";
import { availableEndDateApi } from "@/app/apis/apply/availableRoomNumberApi";

export const useAvailableRoomNumber = (startDate: string, endDate: string) => {
  return useQuery({
    queryKey: ["availableEndDate", startDate, endDate],
    queryFn: async () => availableEndDateApi(startDate, endDate),
    enabled: !!startDate && !!endDate,
  });
};
