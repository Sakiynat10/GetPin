import { Fragment } from "react";
import ProfileAside from "@/components/profile-aside";
import ProfileHeader from "@/components/profile-header";
import Footer from "@/components/footer";

export default function RootLayout({ children }) {
    return (
        <Fragment>
            <ProfileHeader/>
            <main style={{ height:"100%" , maxWidth:"1040px" , width:"100%", marginLeft:"auto" , marginRight:"auto",paddingTop:"78px"}}>
                <ProfileAside/>
                {children}
                <Footer />
            </main>
        </Fragment>
    );
}
