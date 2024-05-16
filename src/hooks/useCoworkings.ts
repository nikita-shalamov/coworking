import { CoworkingService } from "@/services/CoworkingService"
import { useQuery } from "@tanstack/react-query"

export const useCoworking = (id: number) => {
    return useQuery({
        queryKey: ["coworking", id],
        queryFn: () => CoworkingService.getCoworkingItem(id),
    })
}
