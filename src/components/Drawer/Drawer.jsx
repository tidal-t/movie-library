import { Outlet, useNavigate, useParams, Link } from "react-router-dom";
import { movie_rate, movie_release } from '../../assets/scripts/movieInfo.js';
import "./drawer.css";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Loading from "./components/Loading.jsx";
import Genre from "./components/Genre.jsx";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzQxNTg5NDE2YTlkZDRmOTFkNDA5YzgxN2NhYmNmNCIsIm5iZiI6MTc0MTg3MDQ0Ny40NCwic3ViIjoiNjdkMmQ1NmZlZWRiNTNlNTJjMWRlZmIxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.mAyAn17iuMSMf0n2PfovX9pokHsybhV4IoCiaih2vbo'
    }
};




export default function Drawer() {
    const { type, id, '*': subroute } = useParams();
    const [isClosing, setIsClosing] = useState(false);
    const [data, setData] = useState();
    const [isLoading, setLoading] = useState(true);
    const [isSub, setSub] = useState(true);
    const descreptionText = useRef();
    const navigate = useNavigate();


    function handleClose() {
        setIsClosing(true);
    }
    function substrText(text, limit) {
        return text.substring(0, limit)

    }
    function handleReadMore() {
        setSub(false)
    };
    function handleAnimationComplete() {
        if (isClosing) {
            navigate(-1);
        }
    }
    useEffect(() => {
        setLoading(true);
        setSub(true);
        fetch(`https://api.themoviedb.org/3/${type}/${id}?language=en-US`, options)
            .then(res => res.json())
            .then(res => { setData(res); setLoading(false); console.log(res) })
            .catch(err => console.error(err));
    }, [type, id]);


    const item_rating = data && movie_rate(data.vote_average);
    const item_title = data && (type == "tv" ? data.name : data.title);
    const item_overview = data && data.overview;
    const subOverview = data && substrText(data.overview, 100);
    const generes = data && data.genres.map(genre => { return (<Genre name={genre.name} />) })
    let first_air_date, last_air_date, release_date;
    if (data) {
        if (type == "tv") {
            first_air_date = movie_release(data.first_air_date);
            last_air_date = movie_release(data.last_air_date);

        } else {
            release_date = movie_release(data.release_date)
        }
    }

    return (
        // <motion.aside
        //     className="drawer__detail"
        //     initial={{ width: 0 }}
        //     animate={{ width: isClosing ? 0 : "100%" }}
        //     transition={{ duration: 0.2 }}
        //     onAnimationComplete={handleAnimationComplete}
        // >

        //     {!isLoading ?
        //         <>

        //             <div className="detail--img">
        //                 <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} loading='lazy' alt="" />

        //                 <button className="drawer_close_btn btn " onClick={handleClose}>
        //                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="white" d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z" /></svg>
        //                 </button>
        //             </div>
        //             <div className="scroll_detial">
        //                 <div className="drawer_wrapper">
        //                     <div className="detail__card">
        //                         <div className="card--info">
        //                             <p className="card--title">{item_title}</p>
        //                             <div className="info--item">
        //                                 <div style={{ display: "flex", gap: ".5rem" }}>
        //                                     <div className="nav_data info--release">{first_air_date ? (`${first_air_date} - ${last_air_date}`) : release_date}</div>
        //                                     <div className="nav_data item--rate">{item_rating}</div>
        //                                 </div>
        //                                 <div className="genere_container">
        //                                     <div className="genere">
        //                                         {generes}
        //                                     </div>
        //                                 </div>


        //                             </div>
        //                             <div className="item--descreption">
        //                                 <span className="descreption" ref={descreptionText}>{isSub ? subOverview : item_overview}</span>
        //                                 <span className="readMore_btn" onClick={handleReadMore} style={{ display: isSub ? "inline" : "none" }}> ... Read More</span>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div style={{ width: "100%", textAlign: "center", marginTop: "1rem" }}>
        //                         <div className="item_tablist">
        //                             <Link to={`/${type}/${id}`} data-active={location.pathname.endsWith(id)}>overview</Link>
        //                             <Link to={`/${type}/${id}/cast`} data-active={location.pathname.includes("cast")}>cast</Link>
        //                             <Link to={`/${type}/${id}/images`} data-active={location.pathname.includes("images")}>images</Link>
        //                             <Link to={`/${type}/${id}/production`} data-active={location.pathname.includes("production")}>production</Link>
        //                         </div>
        //                     </div>
        //                 </div>

        //                 <div className="item_info">
        //                     <Outlet context={{ data, type, id }} />
        //                 </div>
        //             </div>
        //         </>
        //         : <Loading />}
        // </motion.aside>

        <>
            {!isLoading && (
                <div className="drawer_container">
                    <div className="drawer">
                        <div className="drawer_item">
                            <div className="item_backdrop">
                                <img src={`https://image.tmdb.org/t/p/w1280${data.backdrop_path}`} loading='lazy' alt="" />
                            </div>
                            <div className="test">
                                <div className="item_poster">
                                    <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} loading='lazy' alt="" />
                                </div>
                                <div className="item_info">
                                    <div className="info_title">{item_title}</div>
                                    <div className="info_group">
                                        <div className="nav_data info_release">{first_air_date ? (`${first_air_date} - ${last_air_date}`) : release_date}</div>
                                        <div className="nav_data info_rate">{item_rating}</div>
                                    </div>
                                    <div className="info_group generes">{generes}</div>
                                    <div className="item_description">
                                        <span className="description" ref={descreptionText}>{item_overview}</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="drawer_info">
                            <div style={{display : "flex" , justifyContent : "center" , alignItems : "center"}}>
                                <div className="item_tablist">
                                    <Link to={`/${type}/${id}`} data-active={location.pathname.endsWith(id)}>overview</Link>
                                    <Link to={`/${type}/${id}/cast`} data-active={location.pathname.includes("cast")}>cast</Link>
                                    <Link to={`/${type}/${id}/images`} data-active={location.pathname.includes("images")}>images</Link>
                                    <Link to={`/${type}/${id}/similar`} data-active={location.pathname.includes("similar")}>similar</Link>
                                    <Link to={`/${type}/${id}/production`} data-active={location.pathname.includes("production")}>production</Link>
                                </div>
                            </div>
                            <div className="tab_view">
                                <Outlet context={{ data, type, id }} />
                            </div>
                        </div>

                    </div>
                </div>


            )}
        </>

    );
}
