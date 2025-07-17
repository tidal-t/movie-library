import Skeleton from '@mui/material/Skeleton';


export default function DrawerLoading() {
    return (
        <>
            <div className="drawer_item">
                <div className="item_backdrop">
                    <Skeleton animation="wave" variant="rectangular" sx={{ width: '100%', height: '100%' }} style={{ backgroundColor: '#312f2f', opacity: "0.6" }} />
                </div>
                <div className="test">
                    <div className="item_poster">
                        <Skeleton animation="wave" variant="rectangular" sx={{ width: '100%', height: '100%' }} style={{ backgroundColor: '#312f2f' }} />
                    </div>
                    <div className="item_info">
                        <div className="info_title">
                            <Skeleton animation="wave" variant="text" sx={{ width: '250x', height: '50px' }} style={{ backgroundColor: '#312f2f', borderRadius: "0.3rem" }} />
                        </div>
                        <div className="info_group">
                            <div className="nav_data info_release" style={{ padding: "0", backgroundColor: "transparent" }}>
                                <Skeleton animation="wave" variant="rectangular" sx={{ width: '95px', height: '22px' }} style={{ backgroundColor: '#312f2f', borderRadius: "999px" }} />
                            </div>
                            <div className="nav_data info_rate" style={{ padding: "0" , backgroundColor: "transparent" }}>
                                <Skeleton animation="wave" variant="rectangular" sx={{ width: '50px', height: '22px' }} style={{ backgroundColor: '#312f2f', borderRadius: "999px" }} />

                            </div>
                        </div>
                        <div className="info_group generes">
                            <Skeleton animation="wave" variant="rectangular" sx={{ width: '60px', height: '22px' }} style={{ backgroundColor: '#312f2f', borderRadius: "999px" }} />
                            <Skeleton animation="wave" variant="rectangular" sx={{ width: '60px', height: '22px' }} style={{ backgroundColor: '#312f2f', borderRadius: "999px" }} />
                            <Skeleton animation="wave" variant="rectangular" sx={{ width: '60px', height: '22px' }} style={{ backgroundColor: '#312f2f', borderRadius: "999px" }} />
                        </div>
                        <div className="item_description">
                            <span className="description">
                                <Skeleton animation="wave" variant="text" sx={{ width: '400px', height: '27px' }} style={{ backgroundColor: '#312f2f' }} />
                                <Skeleton animation="wave" variant="text" sx={{ width: '420px', height: '27px' }} style={{ backgroundColor: '#312f2f' }} />
                                <Skeleton animation="wave" variant="text" sx={{ width: '150px', height: '27px' }} style={{ backgroundColor: '#312f2f' }} />
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
