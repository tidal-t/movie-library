import Header from "../Header";
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import './listView.css'
import Item from "../Item";
import { useEffect, useState } from "react";
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzQxNTg5NDE2YTlkZDRmOTFkNDA5YzgxN2NhYmNmNCIsIm5iZiI6MTc0MTg3MDQ0Ny40NCwic3ViIjoiNjdkMmQ1NmZlZWRiNTNlNTJjMWRlZmIxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.mAyAn17iuMSMf0n2PfovX9pokHsybhV4IoCiaih2vbo'
    }
};


export default function ListView() {
    const [searchParams] = useSearchParams();
    const [data, setData] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    const handleClick = (item) => {
        navigate(`/${item.media_type}/${item.id}`, {
            state: { backgroundLocation: location },
        });
    };
    const query = searchParams.get('q') || '';
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=true&language=en-US&page=1`, options)
            .then(res => res.json())
            .then(res => { setData(res); console.log(res) })
            .catch(err => console.error(err));
    }, [searchParams])
    const mt_data = data?.results.filter((item) =>
        ['movie', 'tv'].includes(item.media_type)
    );
    const list = data && mt_data.map(item => { return <Item key={item.id} data={item} onClick={() => handleClick(item)} /> })
    data && console.log(list)

    return (
        <>

            <div className="listView_wrapper">
                <div className="listView">
                    {list}
                </div>
            </div>
        </>

    )
}
