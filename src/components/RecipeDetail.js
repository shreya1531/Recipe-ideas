import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function fetchRecipeDetail() {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await res.json();
      setRecipe(data.meals[0]);
    }
    fetchRecipeDetail();
  }, [id]);

  if (!recipe) return <p>Loading recipe details...</p>;

  return (
    <div className="recipe-detail">
      <button className="back-btn" onClick={() => navigate("/")}>
        ⬅ Back
      </button>
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p><strong>Category:</strong> {recipe.strCategory}</p>
      <p><strong>Area:</strong> {recipe.strArea}</p>
      <p><strong>Instructions:</strong></p>
      <p>{recipe.strInstructions}</p>
      <a href={recipe.strYoutube} target="_blank" rel="noreferrer">
        🎥 Watch Tutorial
      </a>
    </div>
  );
}
