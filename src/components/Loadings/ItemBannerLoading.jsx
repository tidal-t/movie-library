import Skeleton from '@mui/material/Skeleton';

export default function ItemBannerLoading() {

    return (
        <div className="item_banner">
            <div className="banner_img">
                <Skeleton animation="wave" variant="rectangular" sx={{ width: '100%', height: '100%' }} style={{ backgroundColor: '#312f2f' }} />
            </div>
            <div className="item__overlay banner_overlay">
                <div className="banner_info item_banner_info">
                    <div className="banner_item_name">
                    </div>

                    <div className="banner_summary"></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
