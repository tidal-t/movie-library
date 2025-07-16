import { useEffect, useRef, useState } from "react";
import Header from "../Header";
import ItemCarousel from "../ItemCarousel";
import './main.css';
import BannerView from "../Drawer/components/BannerView";

export default function Main() {

  return (
    <>
      <main>
        <div
        >
          <BannerView url="trending/movie/day?language=en-US" />
          <ItemCarousel title="trend movies" url="trending/movie/day?language=en-US" />
          <ItemCarousel title="trend shows" url="trending/tv/day?language=en-US" />
        </div>
      </main>
    </>
  );
}
