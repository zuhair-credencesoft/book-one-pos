import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Contact />
    </>
  );
}

export default MyApp;
