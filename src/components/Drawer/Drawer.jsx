import { Outlet, useNavigate, useParams, Link } from "react-router-dom";
import { movie_rate, movie_release } from '../../assets/scripts/movieInfo.js';
import { motion } from "framer-motion";
import "./drawer.css";
import { useEffect, useRef, useState } from "react";
import { getGradientFromImage } from '../../assets/scripts/posterGradient.js'
import Loading from "./components/Loading.jsx";
import Genre from "./components/Genre.jsx";
import ScrollControl from "./components/ScrollControl.jsx";
import DrawerLoading from "../Loadings/DrawerLoading.jsx";

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
    const item_rating = data && movie_rate(data.vote_average);
    const item_title = data && (type == "tv" ? data.name : data.title);
    const item_overview = data && data.overview;
    // const subOverview = data && substrText(data.overview, 100);
    const generes = data && data.genres.map(genre => { return (<Genre name={genre.name} />) })
    const posterUrl = data && `https://image.tmdb.org/t/p/w500${data.poster_path}`;

    useEffect(() => {
        setLoading(true);
        setSub(true);
        fetch(`https://api.themoviedb.org/3/${type}/${id}?language=en-US`, options)
            .then(res => res.json())
            .then(res => { setData(res); setLoading(false); console.log(res) })
            .catch(err => console.error(err));
    }, [type, id]);

    useEffect(() => {
        if (data) {
            getGradientFromImage(posterUrl).then(res => {
                console.log(res)
            })
        }

    }, [data])



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
        <>
            <ScrollControl />
            <motion.div
                className="drawer_container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <motion.div
                    className="drawer"
                    initial={{ y: "30%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "30%", opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    {!isLoading ? (
                        <>
                            <div className="drawer_item">
                                <div className="item_backdrop">
                                    <img src={`https://image.tmdb.org/t/p/w1280${data.backdrop_path}`} loading='lazy' alt="" />
                                </div>
                                <div className="test">
                                    <div className="item_poster">
                                        <img src={posterUrl} loading='lazy' alt="" />
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
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
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
                        </>
                    ) : <DrawerLoading />}
                </motion.div>
            </motion.div>



        </>

    );
}
