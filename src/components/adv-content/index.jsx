"use client"
import Image from "next/image";
import SkeletonLoading from "@/components/skeleton-main-page-loading";
import {useEffect, useState} from "react";

const AdvContent = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <>

                    <div className="adv-content">
                        {loading ? <SkeletonLoading w={"100%"} h={"90px"} /> :
                            <Image fill src={"/advertisment.png"} alt="adv"/>
                        }
                    </div>

        </>
    )
}

export default AdvContent;