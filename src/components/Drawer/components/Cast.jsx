import { useEffect, useState } from "react";
import CastItem from "./CastItem";
import './styles/castItem.css'
import { useOutletContext } from 'react-router-dom';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzQxNTg5NDE2YTlkZDRmOTFkNDA5YzgxN2NhYmNmNCIsIm5iZiI6MTc0MTg3MDQ0Ny40NCwic3ViIjoiNjdkMmQ1NmZlZWRiNTNlNTJjMWRlZmIxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.mAyAn17iuMSMf0n2PfovX9pokHsybhV4IoCiaih2vbo'
    }
};

export default function Cast() {
    const [cast, setCast] = useState();
    const { data, type, id } = useOutletContext();
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${type}/${id}/credits?language=en-US`, options)
            .then(res => res.json())
            .then(res => setCast(res.cast))
            .catch(err => console.error(err));
    }, [id])
    const castList = cast && cast.map(item => { return (<CastItem data={item} />) })
    return (
        <div className="cast_detials">
            {castList}
        </div>
    )
}
