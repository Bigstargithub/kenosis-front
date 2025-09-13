import { useQuery } from "@tanstack/react-query";
import { availableEndDateApi } from "@/app/apis/apply/availableEndDateApi";

export const useAvailableEndDate = (startDate: string) => {
  return useQuery({
    queryKey: ["availableEndDate", startDate],
    queryFn: async () => availableEndDateApi(startDate),
    enabled: !!startDate,
  });
};