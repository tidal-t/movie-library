import { useState, useEffect } from "react";
import { textSlice } from "../../assets/scripts/text";
import "./itembanner.css"
import { getBestRatedItem } from '../../assets/scripts/logo'
import ItemBannerLoading from '../../components/Loadings/ItemBannerLoading'
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzQxNTg5NDE2YTlkZDRmOTFkNDA5YzgxN2NhYmNmNCIsIm5iZiI6MTc0MTg3MDQ0Ny40NCwic3ViIjoiNjdkMmQ1NmZlZWRiNTNlNTJjMWRlZmIxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.mAyAn17iuMSMf0n2PfovX9pokHsybhV4IoCiaih2vbo',
    },
};
export default function ItemBanner({ data }) {
    const [logo, setLogo] = useState();
    useEffect(() => {
        if (data) {
            fetch(`https://api.themoviedb.org/3/tv/${data.id}/images`, options)
                .then((res) => res.json())
                .then((res) => {
                    setLogo(res.logos);
                })
                .catch((err) => console.error(err));
        }
    }, [data]);

    const bestLogo = logo && (getBestRatedItem(logo));
    return (
        <>
            {data ? (<div className="item_banner">
                <div className="banner_img">
                    <img src={`https://image.tmdb.org/t/p/w1280${data.backdrop_path}`} alt="tet" />
                </div>
                <div className="item__overlay banner_overlay">
                    <div className="banner_info item_banner_info">
                        <div className="banner_item_name">
                            {bestLogo ? (<div className="banner_logo">
                                <img src={`https://image.tmdb.org/t/p/w500${bestLogo.file_path}`} alt="" />
                            </div>) : (<div className="banner_title">{data.name}</div>)}
                        </div>

                        <div className="banner_summary">{textSlice(data.overview, 135)}</div>
                        <div></div>
                    </div>
                </div>
            </div>) : <ItemBannerLoading />}
        </>
    )
}
