import FilterService from "@/services/FiltersService"
import { useQuery } from "@tanstack/react-query"

export const useCities = () => {
    return useQuery({
        queryKey: ["cities"],
        queryFn: () => FilterService.getCities(),
    })
}