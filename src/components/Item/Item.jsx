import { movie_rate, movie_release } from '../../assets/scripts/movieInfo.js';
import './item.css'
export default function Item({ data, type = null, padding = true, onClick }) {
    const item_rating = movie_rate(data.vote_average);
    let typeValue;
    if (type) {
        typeValue = type
    } else {
        typeValue = data.media_type;
    }
    const item_title = typeValue == "tv" ? data.name : data.title;
    const item_release_year = typeValue == "tv" ? movie_release(data.first_air_date) : movie_release(data.release_date);
    console.log(typeof (item_rating))
    return (

        <div className="nav__item" onClick={onClick}>
            <div className="item__image-wrapper">
                {data.poster_path ? (<img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} loading='lazy' alt={item_title} />)
                    :
                    (<div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "var(--border-secondary-dark)" }}>No Poster</div>)}

                <div className="item__overlay">
                    <div className="overlay--info">
                        <div className="info--rate">{Number(item_rating) ? item_rating : "null"}</div>
                        <p className="info--title">{item_title}</p>
                        <p className="info--year">{item_release_year}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
