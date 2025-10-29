import React, { useState, useEffect } from "react";

export default function SearchBar({ ingredient, setIngredient }) {
  const [inputValue, setInputValue] = useState(ingredient || "");

  // keep input field synced with the latest search
  useEffect(() => {
    setInputValue(ingredient);
  }, [ingredient]);

  const handleSearch = (e) => {
    e.preventDefault();
    setIngredient(inputValue.trim());
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        placeholder="Search by ingredient (e.g., chicken)"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
