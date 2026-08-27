import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Utero Clear Fibroid Care | Education & Private WhatsApp Guidance",
  description:
    "Understand fibroid symptoms, types, diagnosis and next steps. View the real Utero Clear pack and ask for product information privately on WhatsApp.",
  keywords: [
    "fibroid education Nigeria",
    "fibroid symptoms",
    "uterine fibroids",
    "Utero Clear",
    "women's wellness",
  ],
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
