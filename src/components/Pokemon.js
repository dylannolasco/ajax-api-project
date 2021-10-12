import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import Search from './Search';

export default function Pokemon() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    let url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setPokemons(json.results)
      })
  }, []);

    return (
      <>
      <article className="grid-1-2">
        <div className="table-poke">
        <h2 className="table-title">Conoce las características de tu Pokemon favorito </h2>
          <table className="poke-table">
            <thead>
              <tr>
                <th>Pokemon ID</th>
                <th>Pokemon</th>
              </tr>
            </thead>
            <tbody>  
              {
                pokemons.map((pokemon,index) =>          
                  (<tr key={pokemon.name}>
                    <td>{index+1}</td>
                    <td>{pokemon.name}</td>
                  </tr>)
                )
              }
            </tbody> 
          </table>
        </div>
        <div className="search-container"><Search pokemons={pokemons}/></div>
        </article>
      </>
    );
}