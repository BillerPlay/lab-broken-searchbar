"use client";

import { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import styles from "./CharacterList.module.css";

export default function CharacterList({query, filterBy}) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const filtered = characters.filter((c) =>
    c[filterBy].toLowerCase().includes(query.toLowerCase())
  );
  if(filtered.length === 0){
    return <p className={styles.empty}> No characters found.</p>
  }
  return (
    <div className={styles.grid}>
      {filtered.map((character) => (
        <CharacterCard key={character.id} character={character} query={query} filterBy={filterBy}/>
      ))}
    </div>
  );
}
