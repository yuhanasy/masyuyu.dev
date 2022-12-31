import "../styles/globals.css";
import { Inter } from "@next/font/google";

const fonttype = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={fonttype.className}>
      <Component {...pageProps} />
    </main>
  );
}
