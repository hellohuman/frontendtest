import {gql} from "@apollo/client";

export const CRUISE_MOVIES = gql`
    query GetCruiseMovies
    {
        Actor(name:"Tom Cruise") {
            movies {
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
