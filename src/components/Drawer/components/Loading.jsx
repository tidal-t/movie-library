import Skeleton from '@mui/material/Skeleton';


export default function Loading() {
    return (
        <>
            <Skeleton animation="wave" variant="rectangular" sx={{ width: '100%', height: '240px', marginBottom: '0.4rem' }} style={{ backgroundColor: '#312f2f' }} />

            <div className="drawer_wrapper">
                <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Skeleton animation="wave" variant="text" sx={{ width: '50%', height: '50px', marginBottom: '0.2rem' }} style={{ backgroundColor: '#312f2f' }} />
                    <div style={{ width: "100%", display: "flex", justifyContent:"center", gap: ".5rem" }}>
                        <Skeleton animation="wave" variant="text" sx={{ width: '15%', height: '40px'}} style={{ backgroundColor: '#312f2f' }} />
                        <Skeleton animation="wave" variant="text" sx={{ width: '15%', height: '40px'}} style={{ backgroundColor: '#312f2f' }} />
                    </div>
                    <div style={{ width: "100%", display: "flex", justifyContent:"center", gap: ".5rem" }}>
                        <Skeleton animation="wave" variant="text" sx={{ width: '20%', height: '40px', marginBottom: '0.2rem' }} style={{ backgroundColor: '#312f2f' }} />
                        <Skeleton animation="wave" variant="text" sx={{ width: '20%', height: '40px', marginBottom: '0.2rem' }} style={{ backgroundColor: '#312f2f' }} />
                    </div>
                </div>
                <Skeleton animation="wave" variant="text" sx={{ width: '100%', height: '150px', marginBottom: '0.2rem' }} style={{ backgroundColor: '#312f2f' }} />
            </div>
        </>
    )
}
