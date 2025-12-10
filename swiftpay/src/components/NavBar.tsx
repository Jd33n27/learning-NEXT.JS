"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import DropDown from "./dropDown";
import { SidebarTrigger } from "./ui/sidebar";

interface NavItem {
  href: string;
  label: string;
}

const NavLinks: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function NavLink({ href, label }: NavItem) {
  const pathname: string = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={`text-center px-4 py-1 transition-all duration-200 rounded-xl flex items-center justify-center gap-3 ${
          isActive ? "glass-card" : "hover:bg-[#e6f0eb38] hover:text-[#0b1b15]"
        }`}
      >
        {label}
      </Link>
    </li>
  );
}

export default function NavBar() {
  return (
    <>
      <div className="w-full flex items-center justify-center glass-card h-14">
        <nav className="flex items-center justify-center gap-4">
          <div className="flex gap-3">
            <SidebarTrigger size="icon-lg" className="text-xl" />
            <DropDown />
          </div>
          <ul className="flex space-x-4">
            {NavLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
