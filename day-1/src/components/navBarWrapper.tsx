"use client";

import NavBar from "./navbar";
import { usePathname } from "next/navigation";

export default function NavBarWrapper() {
  const pathname = usePathname();
  const showNavBar: boolean = pathname.startsWith("/dashboard");
  return showNavBar ? null : <NavBar />;
}
