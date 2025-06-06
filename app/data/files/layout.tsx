import SideNav from "@/components/features/documentation/sidenav";

export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="md:overflow-y-auto flex w-full">
        <div className="flex-grow p-6 md:p-12">{children}</div>
      </div>
    </div>
  );
}
