import Skeleton from '@mui/material/Skeleton';

export default function BannerViewLoading() {


    return (
        <div className="banner_view">
            <div className="banner_img">
                <Skeleton animation="wave" variant="rectangular" sx={{ width: '100%', height: '100%' }} style={{ backgroundColor: '#312f2f'}} />
                <div className="item__overlay"></div>
            </div>
            <div className="banner_overlay">
                <div className='banner_time_nav'>
                </div>
                <div className="banner_info">
                </div>
            </div>
        </div>
    );
}
