"use client";

import { useState } from "react";

import CharacterList from "./components/CharacterList";
import SearchBar from "./components/SearchBar";
import styles from "./page.module.css";

export default function Home() {
  const [query, setQuery] = useState("");
  const [filterBy, setFilterBy] = useState("name");
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>Rick & Morty Characters</h1>
        <p className={styles.subtitle}>Browse the multiverse</p>
      </header>
      <SearchBar query={query} onSearch={setQuery} filterBy={filterBy} onFilterChange={setFilterBy}/>
      <CharacterList query={query} filterBy={filterBy}/>
    </main>
  );
}
