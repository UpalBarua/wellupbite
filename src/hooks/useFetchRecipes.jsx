import { useEffect, useState } from "react";

export default function useFetchRecipes(limit = 0) {
  const [recipes, setRecipes] = useState([]);

  async function fetchRecipes() {
    const apiEndPoint = `https://dummyjson.com/recipes?limit=${limit}`;
    const response = await fetch(apiEndPoint);
    const data = await response.json();
    setRecipes(data.recipes);
  }

  useEffect(() => {
    fetchRecipes();
  }, []);

  return { recipes };
}
