import React from 'react'
import { useState, useEffect } from 'react';
import loading_video from "../../assets/video.mp4";

export default function Video() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3510); 
      return () => clearTimeout(timer);
    }, []);
  return (
    <div>
        <video
        src={loading_video}
        autoPlay
        muted
        loop
        className="loading-video"
      />
      <h1 >NETFLIX ANIMATION VIDEO</h1>
    </div>
  )
}
