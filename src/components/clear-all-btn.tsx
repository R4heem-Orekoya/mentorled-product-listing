"use client"

import { useRouter, useSearchParams } from "next/navigation"

export default function ClearAllBtn() {
   const router = useRouter()
   const searchParams = useSearchParams()

   function handleClear() {
      const params = new URLSearchParams(searchParams.toString())

      params.delete("filter")
      params.delete("category")
      params.delete("search")

      router.replace(`?${params.toString()}`, { scroll: false })
   }

   return (
      <button
         onClick={() => handleClear()} 
         className="text-sm text-cyan-500 hover:text-cyan-400 transition cursor-pointer"
      >
         Clear all
      </button>
   )
}
