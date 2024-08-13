"use client"

import { Fragment } from "react";
import ProfileAside from "@/components/profile-aside";
import ProfileHeader from "@/components/profile-header";
import Footer from "@/components/footer";
import {usePathname} from "next/navigation";

export default function RootLayout({ children }) {
    const params = usePathname();
    const pathname = params.split("/")[2];
    console.log(pathname)
    return (
        <Fragment>
            <ProfileHeader/>
            <main style={{ height:"100%" , maxWidth:"1040px" , width:"100%", marginLeft:"auto" , marginRight:"auto",paddingTop:"78px"}}>

                {pathname === "addprofile" ? ""  :<ProfileAside/>}
                {children}
            </main>
            <Footer />
        </Fragment>
    );
}
