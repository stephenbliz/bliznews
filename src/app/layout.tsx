import type { Metadata } from "next";
import Header from "./Component/header";
import {Roboto, Oswald} from 'next/font/google';
import Footer from "./Component/footer";
import "./globals.css";
import FetchAllContextProvider from "./context/fetchAll";
import FetchTrendingContextProvider from "./context/fetchTrending";
import FetchEntertainmentContextProvider from "./context/fetchEntertainment";
import FetchTechnologyContextProvider from "./context/fetchTechnology";
import FetchPoliticsContextProvider from "./context/fetchPolitics";
import FetchSportsContextProvider from "./context/fetchSports";
import FetchBusinessContextProvider from "./context/fetchBusiness";

export const metadata: Metadata = {
  title: "Bliznews",
  description: "A website to read your favourite Nigerian news and trending USA news",
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--roboto-font'
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--oswald-font'
});

export default function RootLayout({children}:{children: React.ReactNode}) {
  return (
    <html 
      lang="en"
      className={`${roboto.variable} ${oswald.variable}`}
    >
      <body
        className="font-body"
      >
        <Header />
        <main>
          <FetchAllContextProvider>
            <FetchTrendingContextProvider>
              <FetchEntertainmentContextProvider>
                <FetchTechnologyContextProvider>
                  <FetchPoliticsContextProvider>
                    <FetchSportsContextProvider>
                      <FetchBusinessContextProvider>
                        {children}
                      </FetchBusinessContextProvider>
                    </FetchSportsContextProvider>
                  </FetchPoliticsContextProvider>
                </FetchTechnologyContextProvider>
              </FetchEntertainmentContextProvider>
            </FetchTrendingContextProvider>
          </FetchAllContextProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
