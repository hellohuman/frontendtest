import {gql} from "@apollo/client";

export const SEARCH_CRUISE_MOVIES = gql`
    query GetCruiseMoviesByTitle($value: String)
    {
        Actor(name:"Tom Cruise") {
            movies(filter: { title_contains: $value }) {
                title
                poster
                plot
                imdbRating
                genres {
                    name
                }
                actors {
                    name
                }
            }
        }
    }
`;
