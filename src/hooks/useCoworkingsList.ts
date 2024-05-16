import { CoworkingListService } from "@/services/CoworkingListService"
import { useQuery } from "@tanstack/react-query"

export const useCoworkingList = () => {
    return useQuery({
        queryKey: ["coworking"],
        queryFn: () => CoworkingListService.getCoworkingList(),
    })
}
