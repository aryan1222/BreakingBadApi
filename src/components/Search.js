import React from 'react';
import {useState} from 'react';

const Search = ({setSearchResults}) =>{

    const [text, setText] = useState('');

    const setTextResults = (t) =>{

        setText(t);
        setSearchResults(t);
    } 

    return(
        <div className="search">
            <form>
                <input type="text" placeholder="Search for characters" className="form-control" value={text} onChange={(e) => setTextResults(e.target.value)}/>
            </form>
        </div>
    )
}

export default Search;