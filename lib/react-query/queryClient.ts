import { toast } from "@/shared/hooks/use-toast";
import { QueryCache, QueryClient } from "@tanstack/react-query";

let hasShownErrorToast = false;

function errorHandler(errorMsg: string) {
  if (hasShownErrorToast) return;
  hasShownErrorToast = true;

  const action = "fetch";
  const title = `Could not ${action} data: ${
    errorMsg ?? "error connecting to server"
  }`;
  toast({
    title,
    description: "",
    variant: "destructive",
  });
  setTimeout(() => {
    hasShownErrorToast = false;
  }, 1000);
}

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      errorHandler(error.message);
    },
  }),
});
