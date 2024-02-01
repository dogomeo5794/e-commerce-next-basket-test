import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeRegistry from "@/theme/ThemeRegistry";
import Header from "@/components/ShopHeader/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Commerce | Next Basket",
  description: "Create simple e-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body className={inter.className}>
          <Header />
            {children}
          <Footer />
        </body>
      </ThemeRegistry>
    </html>
  );
}
