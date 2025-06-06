import NavLinks from "@/features/documentation/nav-links";
import { PowerIcon } from "@heroicons/react/24/outline";
import { signOut } from "auth";
import { Search } from "lucide-react";
import { links } from "./data/nav-links";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-gray-50 overflow-y-auto">
      <div className="flex items-center gap-3 mb-8">
        <Search className="w-6 h-6 text-gray-400" />
        <h1 className="text-xl font-semibold text-gray-900">Documentation</h1>
      </div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks links={links} />
        <div className="hidden h-auto w-full grow rounded-md  md:block"></div>
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md  p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
