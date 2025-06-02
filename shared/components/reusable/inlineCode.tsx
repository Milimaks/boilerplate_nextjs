import { cn } from "@/shared/lib/utils";

interface InlineCodeProps {
  children: React.ReactNode;
  className?: string;
}

export function InlineCode({ children, className }: InlineCodeProps) {
  return (
    <code className={cn("bg-gray-200 p-1 rounded-md ml-1", className)}>
      {children}
    </code>
  );
}
