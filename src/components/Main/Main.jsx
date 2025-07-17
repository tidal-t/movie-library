import { useEffect, useRef, useState } from "react";
import Header from "../Header";
import ItemCarousel from "../ItemCarousel";
import './main.css';
import BannerView from "../Drawer/components/BannerView";
import ScrollControl from "../Drawer/components/ScrollControl";

export default function Main() {

  return (
    <>
      <main>
        <div
        >
          <ScrollControl />
          <BannerView url="trending/movie/day?language=en-US" />
          <ItemCarousel title="latest movies" url="movie/now_playing?language=en-US" />
          <ItemCarousel title="latest shows" url="tv/airing_today?language=en-US" type="tv"/>
          <ItemCarousel title="Popular movies" url="movie/popular?language=en-US" />
          <ItemCarousel title="Popular shows" url="tv/popular?language=en-US" />
          <ItemCarousel title="top rated movies" url="movie/top_rated?language=en-US" />
          <ItemCarousel title="top rated shows" url="tv/top_rated?language=en-US" />
        </div>
      </main>
    </>
  );
}
