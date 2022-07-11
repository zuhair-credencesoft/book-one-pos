import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if (router.pathname == "/")
    return (
      <>
        <Navbar />
        <Component {...pageProps} />
      </>
    );
  else {
    return (
      <>
        <Navbar />
        <Component {...pageProps} />
        <Contact />
      </>
    );
  }
  // return (
  //   <>
  //     <Navbar />
  //     <Component {...pageProps} />
  //     <Contact />
  //   </>
  // );
}

export default MyApp;
