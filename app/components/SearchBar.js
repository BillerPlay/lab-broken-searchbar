"use client"

import {useState} from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({query, onSearch, filterBy, onFilterChange}) {

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputGroup}>
        <svg
          className={styles.icon}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder="Search characters..."
          className={styles.input}
          value={query}
          onChange={(e) => onSearch(e.target.value)}
        />
        {query && (
          <button className={styles.clearBtn} onClick={() => onSearch("")}>Clear</button>
        )
        }
      </div>
      <select
        className={styles.select}
        value={filterBy}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="name">Name</option>
        <option value="species">Species</option>
        <option value="status">Status</option>
      </select>
    </div>
  );
}
