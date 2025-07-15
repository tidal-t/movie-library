import Skeleton from '@mui/material/Skeleton';

export default function ItemLoading() {
    return (
        <>
            {Array(5).fill(0).map((_, i) => (
                <div key={i} className="nav__item">
                    <Skeleton animation="wave" variant="rectangular" sx={{ width: '100%', height: '100%' }} style={{ backgroundColor: '#312f2f' }} />
                </div>
            ))}
        </>
    )
}
