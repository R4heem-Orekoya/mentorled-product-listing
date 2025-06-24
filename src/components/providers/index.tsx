"use client"

import { PropsWithChildren } from 'react'
import TanstackQueryProvider from './tanstack-query'

export default function Providers({ children }: PropsWithChildren) {
   return (
      <TanstackQueryProvider>
         {children}
      </TanstackQueryProvider>
   )
}
