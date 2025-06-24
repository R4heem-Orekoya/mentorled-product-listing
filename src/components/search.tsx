"use client"

import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { useDebounce } from "@uidotdev/usehooks";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Search() {
   const router = useRouter();
   const searchParams = useSearchParams();
   const query = searchParams.get("query") ?? "";
   const [searchTerm, setSearchTerm] = useState(query);

   const debouncedSearchTerm = useDebounce(searchTerm, 300);

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
   };

   useEffect(() => {
      const params = new URLSearchParams(searchParams.toString())

      if (debouncedSearchTerm) {
         params.set("query", debouncedSearchTerm)
      } else {
         params.delete("query")
      }

      router.replace(`?${params.toString()}`, { scroll: false })
   }, [debouncedSearchTerm])

   return (
      <div className="relative">
         <Input
            defaultValue={query}
            onChange={(e) => handleChange(e)}
            className="ps-9 bg-secondary border-0" placeholder="Search"
         />
         <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
            <SearchIcon size={16} aria-hidden="true" />
         </div>

         {searchTerm !== debouncedSearchTerm && (
            <div className="absolute top-1/2 -translate-y-1/2 right-3 [&_svg]:size-3 text-muted-foreground">
               <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity={0.25}></path>
                  <path fill="currentColor" d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z">
                     <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform>
                  </path>
               </svg>
            </div>
         )}
      </div>
   )
};