import { Fragment } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function RootLayout({ children }) {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}
