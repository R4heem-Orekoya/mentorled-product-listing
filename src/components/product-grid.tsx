"use client"

import React from 'react'
import { useSuspenseQuery } from '@tanstack/react-query'
import ProductCard from './product-card'
import { Coffee } from '@/types'
import { useSearchParams } from 'next/navigation'
import EmptyIllustration from "~/public/empty.svg"
import Image from 'next/image'

export default function ProductGrid() {
   const searchParams = useSearchParams();
   const filter = searchParams.get("filter");
   const query = searchParams.get("query") ?? "";
   const categories = searchParams.getAll("category");

   const { data: products, error } = useSuspenseQuery({
      queryKey: ["products", filter, ...categories, query],
      queryFn: async () => {
         const url = new URL(`${process.env.NEXT_PUBLIC_SITE_URL}/api/coffees`);

         url.searchParams.set("query", query)
         if (filter) url.searchParams.set("filter", filter);
         categories.forEach(category => {
            url.searchParams.append("category", category);
         });

         const res = await fetch(url.toString());

         return res.json() as Promise<Coffee[] | null>;
      }
   })

   if (error) return <></>

   return (
      <>
         {products && products.length > 0 ? (
            <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6'>
               {products.map(product => (
                  <ProductCard product={product} key={product.id} />
               ))}
            </div>
         ) : (
            <div className='flex items-center justify-center py-12'>
               <div className='relative text-center'>
                  <Image
                     src={EmptyIllustration}
                     className='size-36 object-cover mx-auto'
                     alt='empty illustration'
                  />
                  <p className='text-muted-foreground mt-2'>No products found!</p>
               </div>
            </div>
         )}
      </>
   )
}