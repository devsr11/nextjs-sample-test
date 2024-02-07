"use client";
import { useSidebarStore } from "@/store";
import { ChevronFirst, ChevronLast } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

type SidebarItemType = {
  icon: ReactNode;
  text: string;
  path: string;
};

export function SidebarItem({ icon, text, path }: SidebarItemType) {
  const { expanded } = useSidebarStore((state) => state);
  const pathname = usePathname();
  const active = pathname === path;

  return (
    <Link
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
      }`}
      href={path}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {active && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}
      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible -translate-x-3 transition-all group-hover:visible group-hover: opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </Link>
  );
}

const Sidebar = ({ children }: IProps) => {
  const { expanded, setExpanded } = useSidebarStore((state) => state);
  return (
    <aside className="h-screen max-sm:absolute z-10">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <span
            className={`font-semibold text-xl overflow-hidden ${
              expanded ? "w-52" : "w-0"
            }`}
          >
            NextJS Sample Test
          </span>
          <button
            onClick={setExpanded}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-green-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>
        <ul className="flex-1 px-3">{children}</ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
