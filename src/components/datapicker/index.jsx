"use client"
import {DatePicker} from "antd";
import SkeletonLoading from "@/components/skeleton-main-page-loading";
import {useEffect, useState} from "react";
import moment from "moment";
import 'moment/locale/uz';

moment.locale('uz');

const dateFormat = 'DD MMMM YYYY';

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
                <DatePicker  format={dateFormat} placeholder="Дата"/>
            }
        </>
    )
}

export default DataPicekr;