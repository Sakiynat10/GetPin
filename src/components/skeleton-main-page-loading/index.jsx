import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"
import {useEffect, useState} from "react";

const SkeletonLoading = ({h , w , b , mb ,mt}) => {
    return(
        <Skeleton style={{marginBottom: `${mb}` , marginTop:`${mt}`}} height={h} width={w} borderRadius={b}></Skeleton>
    )
}

export default SkeletonLoading;