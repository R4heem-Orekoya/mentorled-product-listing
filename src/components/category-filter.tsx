"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Checkbox } from "./ui/checkbox"
import { Label } from "./ui/label"

const ALL_CATEGORIES = ["hot", "cold"] as const

export default function CategoryFilter() {
   const searchParams = useSearchParams()
   const router = useRouter()

   const [selected, setSelected] = useState<string[]>(
      searchParams.getAll("category")
   )

   useEffect(() => {
      const current = searchParams.getAll("category")
      setSelected(current)
   }, [searchParams])

   useEffect(() => {
      const params = new URLSearchParams(searchParams.toString())

      params.delete("category")

      selected.forEach(cat => {
         params.append("category", cat)
      })

      router.replace(`?${params.toString()}`, { scroll: false })
   }, [selected])

   const toggleCategory = (value: string) => {
      setSelected(prev =>
         prev.includes(value)
            ? prev.filter(c => c !== value)
            : [...prev, value]
      )
   }

   return (
      <div className="space-y-3 text-muted-foreground">
         {ALL_CATEGORIES.map((cat) => (
            <div className="flex items-center gap-2" key={cat}>
               <Checkbox
                  id={cat}
                  checked={selected.includes(cat)}
                  onCheckedChange={() => toggleCategory(cat)}
               />
               <Label htmlFor={cat} className="capitalize">{cat}</Label>
            </div>
         ))}
      </div>
   )
}
