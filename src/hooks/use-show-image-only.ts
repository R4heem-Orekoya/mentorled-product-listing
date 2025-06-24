import { useSearchParams } from "next/navigation"

export function useShowImageOnly() {
   const searchParams = useSearchParams()
   const active = searchParams.get("showimageonly") === "true"

   return { active }
}