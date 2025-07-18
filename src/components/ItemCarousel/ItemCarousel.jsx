import "./carousel.css"
import Item from '../Item';
import ItemLoading from "../Loadings/ItemLoading";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzQxNTg5NDE2YTlkZDRmOTFkNDA5YzgxN2NhYmNmNCIsIm5iZiI6MTc0MTg3MDQ0Ny40NCwic3ViIjoiNjdkMmQ1NmZlZWRiNTNlNTJjMWRlZmIxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.mAyAn17iuMSMf0n2PfovX9pokHsybhV4IoCiaih2vbo'
    }
};
export default function ItemCarousel({ title, url }) {
    const [data, setData] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    const type = data && (data[0].first_air_date != undefined ? "tv" : "movie");
    const handleClick = (item) => {
        navigate(`/${type}/${item.id}`, {
            state: { backgroundLocation: location },
        });
    };
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${url}`, options)
            .then(res => res.json())
            .then(res =>setData(res.results))
            .catch(err => console.error(err));
    }, [])
    const List = data && data.map(item => { return (<Item key={item.id} type={item.first_air_date ? "tv" : "movie"} onClick={() => handleClick(item)} data={item}/>) })
    return (
        <div className="carousel">
            <div className="carousel__header">
                <p className="header--title">{title}</p>
                <button className="btn-base header--more">Explore More</button>
            </div>
            <div className="carousel__nav">
                <div className="nav--wrapper">
                    {List ? List : <ItemLoading />}
                </div>
            </div>
        </div>
    )
}
