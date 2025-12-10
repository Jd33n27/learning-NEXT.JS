import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "../components/NavBar";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import App from "next/app";
import { AppSidebar } from "@/components/app-sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SwiftPay",
    template: "%s | SwiftPay",
  },
  description: "A modern fintech solution for global payments",
  openGraph: {
    type: "website",
    siteName: "Swiftpay",
    images: ["/swiftpay/public/next.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <NavBar />
          <AppSidebar />
          <main className="flex flex-col">{children}</main>
        </SidebarProvider>
      </body>
    </html>
  );
}
