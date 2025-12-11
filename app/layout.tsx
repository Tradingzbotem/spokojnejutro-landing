// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "spokojnejutro.com – ubezpieczenie na życie i emerytura",
  description:
    "Pomagam zaplanować ubezpieczenie na życie i dodatkowy kapitał na emeryturę – prosto, bez żargonu.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className="bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
