import { Fragment } from "react";
import AdminAside from './../../components/admin-aside/index';

export default function RootLayout({ children }) {
  return (
    <Fragment>
      <AdminAside/>
      <main style={{background:"#fff" , height:"100%"}}>{children}</main>
    </Fragment>
  );
}
