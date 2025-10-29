import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RecipeList({ ingredient }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!ingredient) {
      setRecipes([]); // clear recipes if input is empty
      return;
    }

    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = await response.json();
        setRecipes(data.meals || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [ingredient]);

  if (!ingredient) {
    return null; // don’t show anything until user searches
  }

  if (loading) {
    return <p className="loading">🍳 Fetching recipes...</p>;
  }

  if (recipes.length === 0) {
    return <p className="no-results">No recipes found for "{ingredient}"</p>;
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div
          key={recipe.idMeal}
          className="recipe-card"
          onClick={() => navigate(`/recipe/${recipe.idMeal}`)}
        >
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h3>{recipe.strMeal}</h3>
        </div>
      ))}
    </div>
  );
}
