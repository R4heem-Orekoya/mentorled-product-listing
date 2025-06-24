import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

import React, { PropsWithChildren } from 'react'

export default function TanstackQueryProvider({ children }: PropsWithChildren) {
   return (
      <QueryClientProvider client={queryClient}>
         {children}
      </QueryClientProvider>
   )
}
