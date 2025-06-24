"use client"

import React from 'react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Product } from '@/types'
import ProductCard from './product-card'


export default function ProductGrid() {
   const { data: products, isFetching, error } = useSuspenseQuery({
      queryKey: ["products"],
      queryFn: async () => {
         const res = await fetch("https://coffee-shop-api-sandy.vercel.app/api/v1/products")

         return res.json() as Promise<Product[] | null>
      }
   })

   console.log(products);

   return (
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6'>
         {products && products.map(product => (
            <ProductCard product={product} key={product.id}/>
         ))}
      </div>
   )
}
