import { useEffect, useState } from 'react';
import './bannerView.css';
import { AnimatePresence, motion } from 'framer-motion';
import { textSlice } from '../../../../assets/scripts/text';
import BannerViewLoading from '../../../Loadings/BannerViewLoading'

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzQxNTg5NDE2YTlkZDRmOTFkNDA5YzgxN2NhYmNmNCIsIm5iZiI6MTc0MTg3MDQ0Ny40NCwic3ViIjoiNjdkMmQ1NmZlZWRiNTNlNTJjMWRlZmIxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.mAyAn17iuMSMf0n2PfovX9pokHsybhV4IoCiaih2vbo'
    }
};

export default function BannerView({ url }) {
    const [data, setData] = useState();
    const [index, setIndex] = useState(0);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${url}`, options)
            .then(res => res.json())
            .then(res => {
                const results = res.results.slice(0, 10);
                setData(results);
                results.forEach(item => {
                    const img = new Image();
                    img.src = `https://image.tmdb.org/t/p/w1280${item.backdrop_path}`;
                });
            })
            .catch(err => console.error(err));
    }, [url]);

    useEffect(() => {
        if (!data || data.length === 0) return;
        const timer = setInterval(() => {
            setIndex(prev => {
                return (prev + 1) % data.length;
            });
        }, 6000);

        return () => clearInterval(timer);
    }, [data]);



    return (
        <>

            {data ? (<div className="banner_view">
                <div className="banner_img">
                    <AnimatePresence mode="wait">
                        <motion.img
                            src={`https://image.tmdb.org/t/p/w1280${data[index].backdrop_path}`}
                            alt=""
                            key={`current-${data[index].backdrop_path}`}
                            initial={{ filter: 'blur(20px)', scale: 1.1, opacity: 0 }}
                            animate={{ filter: 'blur(0px)', scale: 1, opacity: 1 }}
                            exit={{ filter: 'blur(20px)', opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className='img_background'
                        />
                    </AnimatePresence>
                    <div className="item__overlay"></div>
                </div>
                <div className="banner_overlay">
                    <div className='banner_time_nav'>
                        {data.map((_, i) => (
                            <div
                                key={i}
                                className={i === index ? 'progress_banner active' : 'progress_banner'}
                                onClick={() => {
                                    setPrevIndex(index);
                                    setIndex(i);
                                }}
                            ></div>
                        ))}
                    </div>
                    <div className="banner_info">
                        <motion.div
                            className='trend_badge'
                            key={`badge-${index}`}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 1.5,
                                delay: 0.5,
                                type: 'spring',
                                stiffness: 200,
                                damping: 10
                            }}>
                            trending now
                        </motion.div>
                        <motion.div
                            className='banner_title'
                            key={`title-${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}>
                            {data[index].original_title}
                        </motion.div>
                        <motion.div
                            className='banner_summary'
                            key={`summary-${index}`}
                            initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
                            animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.5 }}>
                            {textSlice(data[index].overview, 135)}
                        </motion.div>
                    </div>
                </div>
            </div>) : <BannerViewLoading />}
        </>
    );
}
