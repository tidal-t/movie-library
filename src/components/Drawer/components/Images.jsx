import { useEffect, useState } from 'react';
import { Link, useParams, useLocation, useOutletContext } from 'react-router-dom';
import Image from './Image';
import './styles/images.css';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzQxNTg5NDE2YTlkZDRmOTFkNDA5YzgxN2NhYmNmNCIsIm5iZiI6MTc0MTg3MDQ0Ny40NCwic3ViIjoiNjdkMmQ1NmZlZWRiNTNlNTJjMWRlZmIxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.mAyAn17iuMSMf0n2PfovX9pokHsybhV4IoCiaih2vbo',
    },
};

export default function Images() {
    const location = useLocation();
    const [images, setImages] = useState([]);
    const [activeTab, setActiveTab] = useState('backdrops');
    const { data, type, id } = useOutletContext();
    const { imageType } = useParams();

    // تعیین تب فعال از روی URL
    useEffect(() => {
        setActiveTab(imageType ? imageType : "backdrops");
    }, [imageType]);

    // گرفتن تصاویر
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${type}/${id}/images`, options)
            .then((res) => res.json())
            .then((res) => {
                if (activeTab === 'backdrops') setImages(res.backdrops || []);
                else if (activeTab === 'logos') setImages(res.logos || []);
                else if (activeTab === 'posters') setImages(res.posters || []);
            })
            .catch((err) => console.error(err));
    }, [type, id, activeTab]);

    const galleryList = images.map((image, index) => (
        <Image
            key={image.file_path || index}
            imagePath={image.file_path}
            aspectRatio={image.aspect_ratio}
        />
    ));

    return (
        <div className="drawer_wrapper">
            <div style={{ width: '100%', textAlign: 'center', marginTop: '1rem' }}>
                <div className="item_tablist">
                    <Link
                        to={`/${type}/${id}/images`}
                        data-active={activeTab === 'backdrops'}
                    >
                        backdrops
                    </Link>
                    <Link
                        to={`/${type}/${id}/images/logos`}
                        data-active={activeTab === 'logos'}
                    >
                        logos
                    </Link>
                    <Link
                        to={`/${type}/${id}/images/posters`}
                        data-active={activeTab === 'posters'}
                    >
                        posters
                    </Link>
                </div>
            </div>

            <div className="image_gallery">
                <div className="gallery">{galleryList}</div>
            </div>
        </div>
    );
}
