import {useQuery} from "@apollo/client";
import SearchMoviesResults from "./SearchMoviesResults";
import {SEARCH_CRUISE_MOVIES} from "../queries/SEARCH_CRUISE_MOVIES";

export default function SearchMovies({value}) {
    /** @namespace data.Actor.movies **/
    const title = {
        title: value
    };

    const {loading, error, data} = useQuery(SEARCH_CRUISE_MOVIES, {
        variables: { value },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <SearchMoviesResults data={data}/>
    )
}
