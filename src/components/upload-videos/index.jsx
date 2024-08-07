// components/MediaUpload.js
"use client";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.scss";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const MediaUpload = () => {
  const [files, setFiles] = useState([{id:1}]);
  // const [files1, setFiles1] = useState([]);
  // const [files2, setFiles2] = useState([]);
  // const [files3, setFiles3] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [currentIndex1, setCurrentIndex1] = useState(0);

  const handleDeleteFile = (_id) => {
    setFiles(files.filter((el) => el.id !== _id))
  }

  const handleFileChange = (e, _id) => {
    setFiles(files.map(el=>{
      if(el.id===_id){
        el.data = e.target.files[0];
      }
      return el;
    }
  ))
    setFiles([...files, {id:Date.now()}]);
    console.log(e.target.files);
  };
  console.log(files);

  // const handleFileChange1 = (e) => {
  //   setFiles1([...files, ...Array.from(e.target.files)]);
  // };

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {files.map((el, i) =>
               <SwiperSlide key={el.id}>
               <div className="media-content">
                 <div className={"mediaWrapper"}>
                   {files[i].data ? (
                    <>
                     <button className="delete-file" onClick={()=> handleDeleteFile(el.id)}>
                      <img src="/trash-x.svg" alt="delete" />
                     </button>
                     <video
                       src={URL.createObjectURL(files[i].data)}
                       controls
                       className={"video"}
                     />
                     </>
                   ) : (
                     <div className="video-files">
                       <img src="/file.svg" alt="file" />
                       <span className={"placeholder"}>медиа</span>
                     </div>
                   )}
                 </div>
                 <div className={"controls"}>
                   <label className={"uploadButton"}>
                     Загрузить медиа
                     <input
                       type="file"
                       multiple
                       className={"hiddenInput"}
                       placeholder="res"
                       onChange={(e) => handleFileChange(e, el.id)}
                     />
                   </label>
                 </div>
       
               </div>
             </SwiperSlide>     
      )}

    </Swiper>
  );
};

export default MediaUpload;
