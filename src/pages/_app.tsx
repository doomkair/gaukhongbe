import { MainLayout } from "@/layouts";
import { Nunito } from "next/font/google";
import type { AppProps } from "next/app";

import "@/styles/globals.css";
import { twcx } from "@/shared/utils";

const fontSans = Nunito({
  variable: "--font-sans",
  display: "block",
  subsets: ["vietnamese", "latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout
      className={twcx(fontSans.variable, fontSans.style, "font-sans")}
    >
      <Component {...pageProps} />
    </MainLayout>
  );
}
