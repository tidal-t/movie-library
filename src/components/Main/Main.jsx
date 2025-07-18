import { useEffect, useRef, useState } from "react";
import ItemCarousel from "../ItemCarousel";
import './main.css';
import BannerView from "../Drawer/components/BannerView";
import ScrollControl from "../Drawer/components/ScrollControl";
import ItemBanner from "../ItemBanner";
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzQxNTg5NDE2YTlkZDRmOTFkNDA5YzgxN2NhYmNmNCIsIm5iZiI6MTc0MTg3MDQ0Ny40NCwic3ViIjoiNjdkMmQ1NmZlZWRiNTNlNTJjMWRlZmIxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.mAyAn17iuMSMf0n2PfovX9pokHsybhV4IoCiaih2vbo'
  }
};
export default function Main() {
  const [bannerShows, setBannerShows] = useState();
  const [bannerList, setBannerList] = useState();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/popular?language=en-US`, options)
      .then(res => res.json())
      .then(res => setBannerShows(res.results))
      .catch(err => console.error(err));
  }, [])
  useEffect(() => {
    bannerShows && setBannerList(bannerShows.sort(() => Math.random() - 0.5).slice(0, 4));

  }, [bannerShows])
  return (
    <>
      <main>
        <div
        >
          <ScrollControl />
          <BannerView url="trending/movie/day?language=en-US" />
          <ItemCarousel title="latest movies" url="movie/now_playing?language=en-US" />
          <ItemCarousel title="latest shows" url="tv/airing_today?language=en-US" type="tv" />
          <div className="item_banner_wrapper">
            <ItemBanner data={bannerList && bannerList[0]} />
            <ItemBanner data={bannerList && bannerList[1]} />
          </div>
          <ItemCarousel title="Popular movies" url="movie/popular?language=en-US" />
          <ItemCarousel title="Popular shows" url="tv/popular?language=en-US" />
          <div className="item_banner_wrapper">
            <ItemBanner data={bannerList && bannerList[2]} />
            <ItemBanner data={bannerList && bannerList[3]} />
          </div>
          <ItemCarousel title="top rated movies" url="movie/top_rated?language=en-US" />
          <ItemCarousel title="top rated shows" url="tv/top_rated?language=en-US" />
        </div>
      </main>
    </>
  );
}
