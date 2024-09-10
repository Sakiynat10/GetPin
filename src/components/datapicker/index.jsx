"use client"
import {DatePicker} from "antd";
import SkeletonLoading from "@/components/skeleton-main-page-loading";
import {useEffect, useState} from "react";

const DataPicekr = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    return(
        <>
            {loading ? <SkeletonLoading w={"170px"} h={"40px"}/> :
                <DatePicker placeholder="Дата"/>
            }
        </>
    )
}

export default DataPicekr;