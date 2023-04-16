import Head from "next/head";
import Footers from "../footer/footer";
import Navbars from "../header/navbars";
import { Lato } from "next/font/google";

const latofont = Lato({
  weight: ["400", "700"],
  style: ["normal"],

  subsets: ["latin"],
});

const Layouts = ({ children }) => {
  return (
    <>
      <Head>
        <title>theShopz</title>
      </Head>
      <Navbars />
      <main className={latofont.className}>{children}</main>
      <Footers />
    </>
  );
};

export default Layouts;
