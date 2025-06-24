"use client"

import { useParams } from "@/hooks/use-params";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useSearchParams } from "next/navigation";

export default function FilterSelect() {
   const searchParams = useSearchParams()
   const filter = searchParams.get("filter") ?? "all"
   const { setParams } = useParams()

   return (
      <Select defaultValue={filter} onValueChange={(value) => setParams("filter", value)}>
         <SelectTrigger className="border-0 px-2 py-0 shadow-none text-primary font-medium cursor-pointer">
            <SelectValue placeholder="Select a fruit" />
         </SelectTrigger>
         <SelectContent align="end">
            <SelectGroup>
               <SelectItem value="all" className="cursor-pointer">All</SelectItem>
               <SelectItem value="best_selling" className="cursor-pointer">Best Selling</SelectItem>
               <SelectItem value="featured" className="cursor-pointer">Featured</SelectItem>
            </SelectGroup>
         </SelectContent>
      </Select>
   )
}