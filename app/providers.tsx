"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/shared/lib/react-query/queryClient";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      {children}
    </QueryClientProvider>
  );
}
