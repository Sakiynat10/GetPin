import { Fragment } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import SEO from "@/app/seo/page";

export default function RootLayout({ children }) {
  return (
    <Fragment>
        <SEO/>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}
