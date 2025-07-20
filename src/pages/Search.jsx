import { useState, useEffect } from 'react'
import Header from '../components/Header'
import ListView from '../components/ListView'
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import Item from '../components/Item';
import ListViewer from '../components/ListViewer/ListViewer';
import Footer from '../components/Drawer/components/Footer';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzQxNTg5NDE2YTlkZDRmOTFkNDA5YzgxN2NhYmNmNCIsIm5iZiI6MTc0MTg3MDQ0Ny40NCwic3ViIjoiNjdkMmQ1NmZlZWRiNTNlNTJjMWRlZmIxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.mAyAn17iuMSMf0n2PfovX9pokHsybhV4IoCiaih2vbo'
    }
};
export default function Search() {
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
    return (
        <>
            <Header />
            <div className="content_wrapper">
                <ListViewer>
                    {list}
                </ListViewer>
            </div>
            <Footer />
        </>
    )
}
