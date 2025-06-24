import { useRouter, useSearchParams } from "next/navigation"

export function useParams() {
   const searchParams = useSearchParams()
   const router = useRouter()

   function setParams(name: string, value: string) {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      router.replace(`?${params.toString()}`, { scroll: false })
   }

   return { setParams }
}