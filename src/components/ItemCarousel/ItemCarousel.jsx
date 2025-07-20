
import Item from '../Item';
import ItemLoading from "../Loadings/ItemLoading";
import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css"
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzQxNTg5NDE2YTlkZDRmOTFkNDA5YzgxN2NhYmNmNCIsIm5iZiI6MTc0MTg3MDQ0Ny40NCwic3ViIjoiNjdkMmQ1NmZlZWRiNTNlNTJjMWRlZmIxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.mAyAn17iuMSMf0n2PfovX9pokHsybhV4IoCiaih2vbo'
    }
};
export default function ItemCarousel({ title, url }) {
    const [data, setData] = useState();
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const settings = {
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        afterChange: (index) => setCurrentIndex(index),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    };
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${url}`, options)
            .then(res => res.json())
            .then(res => setData(res.results))
            .catch(err => console.error(err));
    }, [])

    const List = data && data.map((item, i) => { return (<Item key={item.id} index={i} type={item.first_air_date ? "tv" : "movie"} data={item} />) })
    const LoadingList = Array(5).fill(0).map((_, i) => { return (<ItemLoading key={i} />) })
    return (
        <div className="carousel">
            <div className="carousel__header">
                <div className="header_control">
                    <p className="header--title">{title}</p>
                    <button className="btn-base header--more">Explore More</button>
                </div>
                <div className="header_carousel_control">
                    <button className="btn-base btn-header btn-control" onClick={() => sliderRef.current.slickPrev()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256"><path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path></svg>
                    </button>
                    <button className="btn-base btn-header btn-control" onClick={() => sliderRef.current.slickNext()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg>
                    </button>
                </div>
            </div>
            <div className="carousel__nav">
                <Slider ref={sliderRef} {...settings}>
                    {List ? List : LoadingList}
                </Slider>
            </div>
        </div>
    )
}
