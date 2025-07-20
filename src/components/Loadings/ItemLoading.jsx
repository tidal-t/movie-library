import Skeleton from '@mui/material/Skeleton';

export default function Item() {

    return (

        <div className='nav__item'>
            <a onClick={(e) => { e.preventDefault() }}>
                <div className="item__image-wrapper">
                    <div style={{ width: "100%", height: "100%" }}>
                        <Skeleton animation="wave" variant="rectangular" sx={{ width: '100%', height: '100%' }} style={{ backgroundColor: '#312f2f' }} />
                    </div>
                    <div className="item__overlay">
                    </div>
                </div>
            </a>
        </div>
    )
}
