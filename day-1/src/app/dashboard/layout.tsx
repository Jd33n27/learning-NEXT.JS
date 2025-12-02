import SideBar from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="">
      <SideBar />
      <div className="ml-64">{children}</div>
    </main>
  );
}
