"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import "./Breathe.modules.scss";
import Background from "@/public/images/destress/breathe.svg";

export default function Breathe() {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => (prev >= 360 ? 0 : prev + 1));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="breathe-wrapper">
      <Image
        src={Background}
        alt="Breathing background"
        layout="fill"
        objectFit="cover"
        className="breathe-bg"
        priority
      />
      <div className="circle-container">
        <div className="outer-circle"></div>
        <div
          className="timer-ring"
          style={{
            background: `conic-gradient(#6F8EBC ${angle}deg, transparent ${angle}deg)`,
          }}
        ></div>
        <div className="inner-circle"></div>
        <p className="breathe-text">breathe</p>
      </div>

    </div>
  );
}
