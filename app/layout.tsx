import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AML Проверка Криптокошельков Онлайн | AML Бот для Борьбы с отмыванием денег",
  description: "AMLBot содержит самую полную в мире базу санкционированных адресов и постоянно отслеживает публичные и частные источники, черные списки монет и кошельков. Разработанный алгоритм быстро выявляет связь адреса с противоправной деятельностью в соответствии с действующим законодательством и требованиями AML/CTF.",
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
        {children}
      </body>
    </html>
  );
}
