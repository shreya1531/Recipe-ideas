import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import "./App.css";

function App() {
  const [ingredient, setIngredient] = useState(""); // shared state between pages

  return (
    <div className="app-container">
      <h1 className="app-title">🍽️ Recipe Ideas</h1>

      {/* Pass ingredient and setter to SearchBar */}
      <SearchBar ingredient={ingredient} setIngredient={setIngredient} />

      <Routes>
        <Route path="/" element={<RecipeList ingredient={ingredient} />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </div>
  );
}

export default App;
