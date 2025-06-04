import { inter } from "@/app/ui/fonts";
import "@/app/ui/global.css";
import "@/app/ui/style.css";
import { Toaster } from "@/shared/components/ui/toaster";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
