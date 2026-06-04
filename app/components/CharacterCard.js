"use client";

import styles from "./CharacterCard.module.css";

export default function CharacterCard({ character, query, filterBy }) {
  function highlightMatch(text, query) {
    if (!query) return <>{text}</>;
    const index = text.toLowerCase().indexOf(query.toLowerCase());
    if (index === -1) return <>{text}</>;
    return (
      <>
        {text.slice(0, index)}
        <mark>{text.slice(index, index + query.length)}</mark>
        {text.slice(index + query.length)}
      </>
    );
  }

  return (
    <div className={styles.card}>
      <img
        src={character.image}
        alt={character.name}
        className={styles.image}
      />
      <div className={styles.info}>
        <h2 className={styles.name}>
          {filterBy === "name"
            ? highlightMatch(character.name, query)
            : character.name}
        </h2>
        <p className={styles.detail}>
          <span
            className={`${styles.statusDot} ${
              character.status === "Alive"
                ? styles.alive
                : character.status === "Dead"
                ? styles.dead
                : styles.unknown
            }`}
          />
          {filterBy === "status"
            ? highlightMatch(character.status, query)
            : character.status}
          {" — "}
          {filterBy === "species"
            ? highlightMatch(character.species, query)
            : character.species}
        </p>
        <p className={styles.location}>{character.location.name}</p>
      </div>
    </div>
  );
}