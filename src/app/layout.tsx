import type { Metadata } from "next";
import "./globals.css";

import "../../public/assets/vendor/bootstrap-icons/font/bootstrap-icons.css";
import "../../public/assets/vendor/hs-mega-menu/dist/hs-mega-menu.min.css";
import "../../public/assets/vendor/aos/dist/aos.css";
import "../../public/assets/vendor/swiper/swiper-bundle.min.css";
import "../../public/assets/css/theme.min.css";
import Header from "./components/header/Header";
export const metadata: Metadata = {
  title: "Param Solutions",
  description: "param solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main id="content" className="overflow-hidden" role="main" >
          {children}
        </main>
      </body>
    </html>
  );
}
