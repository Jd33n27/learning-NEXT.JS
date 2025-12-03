"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface SidebarItem {
  href: string;
  label: string;
}

const sidebarLinks: SidebarItem[] = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/analytics", label: "Analytics" },
  { href: "/dashboard/settings", label: "Settings" },
];

function SidebarLink({ href, label }: SidebarItem) {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link
      href={href}
      className={`text-2xl transition-all duration-200 rounded-xl flex items-center justify-center gap-3 ${
        isActive ? "glass-card" : "hover:bg-[#e6f0eb38] hover:text-[#0b1b15]"
      }`}
    >
      <span>{label}</span>
    </Link>
  );
}

export default function SideBar() {
  return (
    <aside className="glass-card fixed w-64 gap-10 left-0 top-0 min-h-screen pt-30 text-white text-2xl font-semibold">
      <Link
        href="/"
        className="rounded-xl m-4 flex justify-center text-gray-800 transition-colors duration-200 ease-in-out hover:bg-[#e6f0eb58]"
      >
        Home
      </Link>
      <nav className="flex flex-col gap-4 px-4">
        {sidebarLinks.map((link) => (
          <SidebarLink key={link.href} label={link.label} href={link.href} />
        ))}
      </nav>
    </aside>
  );
}
