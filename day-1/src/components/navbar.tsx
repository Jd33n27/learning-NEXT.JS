import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  href: string;
  label: string;
}

const navLinks: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/dashboard", label: "Dashboard" },
];

function NavLink({ href, label }: NavItem) {
  const pathname = usePathname();
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
      <header className="w-full h-20 fixed top-0 glass-card z-40">
        <div className="w-full px-2 flex place-content-center">
          <div className="w-full flex justify-center items-center relative">
            {/* Logo--- */}
            <Link href="/" className="absolute left-2">
              <h1 className="text-3xl font-bold text-emerald-500">Practice</h1>
            </Link>

            {/* Navigation Links */}
            <div className="flex space-x-4 text-xl text-white py-5">
              <ul>
                {navLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    href={link.href}
                    label={link.label}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
