import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Character from './components/Character';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  //thinking about implementing a search functionality, but it seems silly.
  //I'll work on actual stretch goals instead

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  useEffect( () => {
    axios.get(`https://swapi.dev/api/people/?page=${page}`)
    .then(res => setCharacters(res.data.results))
    .catch(e => console.log('ERROR: ' + e))
  }, [page])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  if (characters.length === 0) return <h1>Loading</h1>


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        characters.map(char =>
          <Character key={char.url} char={char} />)
      }
      <div>
        {page !== 1 &&
          <button onClick={() => setPage(page - 1) }>Previous Page</button>
        }
        {page < 9 &&
          <button onClick={() => setPage(page + 1) }>Next Page</button>
        }
      </div>
    </div>
  );
}

export default App;
