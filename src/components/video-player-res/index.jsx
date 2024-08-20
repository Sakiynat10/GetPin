"use client";
import { useState, useRef, useEffect } from "react";
import "./style.scss"

const VideoPlayerRes = ({ autoPlay, src }) => {
    const [isMuted, setIsMuted] = useState(true); // Initial state is muted
    const videoRef = useRef(null);
    console.log(autoPlay);

    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const onMouseDown = (e) => {
        setStartX(e.clientX);
        setStartY(e.clientY);
        setIsDragging(true);
    };

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
            className="video-content-res"
            onMouseDown={onMouseDown}
            style={{
                position: "absolute",
                top: `${offsetY}px`,
                left: `${offsetX}px`,
                cursor: "move",
            }}
        >
            <div onClick={(event) => event.stopPropagation()} id="card-res">
                <video
                    autoPlay
                    loop
                    muted={autoPlay?isMuted:true}
                    src={src}
                    className="video-res"
                ></video>
                <div className="mute-res" onClick={toggleMute}>
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

export default VideoPlayerRes;
