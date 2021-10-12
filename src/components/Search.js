import React, { useState } from 'react'
import Info from './Info';
import search from '../search.png';
import swal from 'sweetalert';

export default function Search(props) {
  const [value, setValue] =  useState('');
  const [pokemon, setPokemon] =  useState([]);
  let isHere = false;

  const handleChange = (event ) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    const pokemons = props.pokemons;
    let url = '';
    pokemons.forEach(pokemon => {
      if(pokemon.name === value) {
        isHere = true;
        url = pokemon.url
      }
    });
    isPokemonHere(url)
    event.preventDefault();
  }

  const isPokemonHere = (url) => {
    if(isHere) {
      console.log(url);
      fetch(url)
        .then(res => res.json())
        .then(json => {
          console.log(json);
          let infoPoke = {
            id: json.id,
            name: json.name,
            height: json.height,
            weight: json.weight,
            avatar: json.sprites.front_default,
            experience: json.base_experience
          }
          setPokemon(infoPoke)
        })
    } else {
      mostrarAlerta();
    }
  }

  const mostrarAlerta = () => {
    swal({
      title: "..Oops",
      text: "No pudimos encontrar ese Pokémon. Escribe uno de la tabla.",
      icon: "warning",
      timer: "5000"
    });
  }

    return (
      <>
      <h1>Busca un Pokemon de la tabla aquí:</h1>  
        <div className="searching">
            <input
              type="text"
              name="search-pokemon"
              id="search-pokenon"
              className="input"
              placeholder="write the pokemon's name"
              value={value}
              onChange={handleChange}          
            />
          <button
            className="btn-submit"
            onClick={handleSubmit}
            disabled={value ? '' : "disabled"}
          >
            <img src={search } alt="search"/>
          </button>
        </div>
        <Info info={pokemon}/>
      </>
    );
}