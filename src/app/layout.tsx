import type { Metadata } from "next";
import Header from "./Component/header";
import Footer from "./Component/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bliznews",
  description: "Generated by create next app",
};

export default function RootLayout({children}:{children: React.ReactNode}) {
  return (
    <html 
      lang="en"
    >
      <body
        className="font-roboto"
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
