import {useQuery} from "@apollo/client";
import SearchMoviesResults from "./SearchMoviesResults";
import {CRUISE_MOVIES} from "../queries/CRUISE_MOVIES";

export default function ListMovies() {
    /** @namespace data.Actor.movies **/
    const {loading, error, data} = useQuery(CRUISE_MOVIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <SearchMoviesResults data={data}/>
    )
}
