// import "@/styles/globals.css";

import Header from "@/shared/header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
