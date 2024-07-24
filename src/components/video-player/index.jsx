// components/VideoPlayer.js
import { useState, useRef } from "react";
import Image from "next/image";
import styles from "./style.scss"; // CSS module for styling

const VideoPlayer = ({ src }) => {
//   const [isMuted, setIsMuted] = useState(false);
//   const videoRef = useRef(null);

//   const toggleMute = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !isMuted;
//       setIsMuted(!isMuted);
//     }
//   };

const [isMuted, setIsMuted] = useState(true); // Initial state is muted
const videoRef = useRef(null);

const toggleMute = () => {
  setIsMuted(prevIsMuted => !prevIsMuted); // Toggle the mute state
  if (videoRef.current) {
    videoRef.current.muted = !isMuted;
  }
};

  return (
    <div>
      <video autoPlay loop muted = {isMuted} src="/sport.mp4" className="video"></video>
      <div className="mute" onClick={toggleMute}>
        {isMuted ? <img src="/un-volume.svg" alt="volume" /> : <img src="/volumee.svg"/>}
      </div>
    </div>
  );
};

export default VideoPlayer;
