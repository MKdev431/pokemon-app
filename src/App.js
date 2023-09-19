import React, { useState, useEffect } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";
import "./App.scss";

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=20").then(res => {
      setPokemon(res.data.results.map(p => p.name));
    });
  }, []);

  return <PokemonList pokemon={pokemon} />;
}

export default App;
