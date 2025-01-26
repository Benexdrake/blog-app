import Layout from "@/layouts/body";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
    <Component {...pageProps} />
  </Layout>
  );
}
