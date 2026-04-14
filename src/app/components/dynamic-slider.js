"use client";
import dynamic from "next/dynamic";
const DynamicSlider = dynamic(() => import("react-slick"), { ssr: false });
export default DynamicSlider;
