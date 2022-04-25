import ListMovies from "./components/ListMovies";
import {useState} from "react";
import ListCheckBox from "./components/ListCheckBox";
import Header from "./components/Header";
import SearchMovies from "./components/SearchMovies";

/**
 * Main entry point to the application. Conditionally shows the list of movies or search results based on the
 * checkbox or data in the input box
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
    const [showMovies, setShowMovies] = useState(false);
    const [value, setValue] = useState('');
    const onChange = (event) => {
        setValue(event.target.value);
    }
    return (
        <>
            <Header />
            <div className="search-input-wrapper">
                <input style={{maxWidth: "200px"}} value={value} onChange={onChange} placeholder="Movie title"/>
            </div>
                <ListCheckBox showMovies={showMovies} setShowMovies={setShowMovies}/>

            {showMovies &&
                <ListMovies/>
            }

            {value &&
            <SearchMovies value={value}/>}
        </>
    );
}

export default App;
