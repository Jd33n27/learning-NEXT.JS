"use client";

import NavBar from "./navbar";
import { usePathname } from "next/navigation";

export default function NavBarWrapper() {
  const pathname = usePathname();
  const hideNavBar: boolean = pathname.startsWith("/dashboard");
  return hideNavBar ? null : <NavBar />;
}
