import imdbLogo from "../media/images/imdb.png";
import '../styles/styles.css';

export default function SearchMoviesResults(props) {
    return (
        <div className="movie-list-wrapper">
            {props.data?.Actor[0]?.movies?.map(({title, poster, plot, imdbRating, genres, actors}) => (
                <div className="movie-card" key={title}>
                    <img className="card-poster-image" src={poster} alt={title} poster/>
                    <div className="movie-card-details">
                        <div>
                            <h1 className="card-title">{title}</h1>
                            <p>{plot}</p>
                        </div>

                        <p className="small-details">
                            Genre(s): {genres.map((genre, index) => (
                            <>
                                {index > 0 && ', '}
                                {genre.name}
                            </>
                        ))}
                            <br/>
                            Actors: {actors.map((actor, index) => (
                            <>
                                {index > 0 && ', '}
                                {actor.name}
                            </>
                        ))}
                        </p>
                        <div className="imdb-rating">
                            <img src={imdbLogo} alt="imdb" width="50px"/>
                            {imdbRating}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
