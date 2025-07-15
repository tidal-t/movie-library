export default function CastItem({ data }) {
    return (
        <div className='cast_item'>
            <div className="cast_profile_img">
                <img src={`https://image.tmdb.org/t/p/w200${data.profile_path}`} alt="" />
            </div>
            <div className="cast_info">
                <p className="info--name">{data.name}</p>
                <p className="info--known">{data.known_for_department}</p>
            </div>
        </div>
    )
}
