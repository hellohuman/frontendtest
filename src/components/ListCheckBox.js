/**
 * Creates a checkbox to save the state of whether the checkbox is currently checked
 * @param setShowMovies Function to save the showMovies boolean value to state
 * @param showMovies {boolean} Whether to show the list of all Tom Cruise Movies
 * @returns {JSX.Element}
 * @constructor
 */
export default function ListCheckBox({setShowMovies, showMovies}) {
    const handleChange = () => {
        setShowMovies(!showMovies);
    }
    return (
        <div className="list-check-box">
            <label>List all Tom Cruise movies</label>
            <input type="checkbox" onChange={handleChange}/>
        </div>
    )
}
