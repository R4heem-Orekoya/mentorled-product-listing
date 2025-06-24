import React from 'react'

interface ProductsSkeletonProps {
   amount?: number
}

export default function ProductsSkeleton({ amount = 6 }: ProductsSkeletonProps) {
   return (
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6'>
         {Array.from({ length: amount }).map((item, i) => (
            <div key={i} className='col-span-1 aspect-[3/4] bg-secondary animate-pulse rounded-lg' />
         ))}
      </div>
   )
}
