import Link from "next/link";

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
                <Link href="/">Home</Link>
              </ul>
              <ul>
                <Link href="/about">About</Link>
              </ul>
              <ul>
                <Link href="/contact">Contact</Link>
              </ul>
              <ul>
                <Link href="/dashboard">DashBoard</Link>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
