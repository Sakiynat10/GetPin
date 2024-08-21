"use client";
import { useState, useRef, useEffect } from "react";
import "./style.scss";

const VideoPlayer = ({ autoPlay, src }) => {
  const [isMuted, setIsMuted] = useState(true); // Initial state is muted
  const videoRef = useRef(null);

  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [loading , setLoading] = useState(true);

  const onMouseDown = (e) => {
    setStartX(e.clientX);
    setStartY(e.clientY);
    setIsDragging(true);
  };

  setTimeout(() => {
    setLoading(false);
  }, 2000); // 2000ms = 2 seconds

  const onMouseMove = (e) => {
    if (!isDragging) return;
    const newOffsetX = offsetX + (e.clientX - startX);
    const newOffsetY = offsetY + (e.clientY - startY);
    setOffsetX(newOffsetX);
    setOffsetY(newOffsetY);
    setStartX(e.clientX);
    setStartY(e.clientY);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    } else {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging, onMouseMove]);

  const toggleMute = () => {
    setIsMuted((prevIsMuted) => !prevIsMuted); // Toggle the mute state
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <div
      className="video-content"
      onMouseDown={onMouseDown}
      style={{
        position: "absolute",
        top: `${offsetY}px`,
        left: `${offsetX}px`,
        cursor: "move",
      }}
    >
      <div onClick={(event) => event.stopPropagation()} id="card">
        <video
          autoPlay
          loop
          muted={isMuted}
          src={src}
          className="video"
        ></video>
        <div className="mute" onClick={toggleMute}>
          {isMuted ? (
            <img src="/un-volume.svg" alt="volume" />
          ) : (
            <img src="/volumee.svg" />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
