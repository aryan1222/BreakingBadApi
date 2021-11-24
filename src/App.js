import React from 'react';
import './App.css';
import Header from './components/Header';
import CharacterGrid from './components/CharacterGrid';
import Spinner from './components/Spinner';
import Search from './components/Search';
import {useState, useEffect} from 'react';
import axios from 'axios';


const App = () =>{

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const setSearchResults = (term) =>{
    if(term)
      setSearchTerm(term);
  }

  useEffect(() => {
    const fetchItems = async () =>{

      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${searchTerm}`);

      setItems([...result.data]);
      setIsLoading(false);
    }

    fetchItems();
  }, [searchTerm]);

  return (
    <div className="container">
      <Header/>
      <Search setSearchResults={setSearchResults} />
      {isLoading ? <Spinner/> : <CharacterGrid items={items}/>}
    </div>
  )
}

export default App;