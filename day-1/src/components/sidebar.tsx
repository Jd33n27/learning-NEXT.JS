import Link from "next/link";

export default function SideBar() {
  return (
    <aside className="glass-card fixed w-64 left-0 top-0 min-h-screen pt-30 text-white text-2xl font-semibold">
      <nav className="flex flex-col gap-4 px-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/analytics">Analytics</Link>
        <Link href="/dashboard/settings">Settings</Link>
      </nav>
    </aside>
  );
}
