// components/SplineClient.js
"use client";

import Spline from "@splinetool/react-spline";
import React from "react";

export default function SplineClient() {
  return (
    <Spline
      scene="https://prod.spline.design/zXYR-7HJXrK0uhPA/scene.splinecode"
      width={100}
      height={100}
    />
  );
}
