import { useEffect, useRef, useState } from "react";
import Header from "../Header";
import ItemCarousel from "../ItemCarousel";
import './main.css';

export default function Main() {

  return (
    <>
      <main>
        <div
        >
          <ItemCarousel title="trend movies" url="trending/movie/day?language=en-US" />
          <ItemCarousel title="trend shows" url="trending/tv/day?language=en-US" />
        </div>
      </main>
    </>
  );
}
