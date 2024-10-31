import React, { useEffect } from "react";
import useFetchRecipes from "../hooks/useFetchRecipes";
import RecipeCard from "../components/RecipeCard";
import { BiFoodMenu } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { FaFrownOpen } from "react-icons/fa";

export default function Recipes() {
  const { recipes } = useFetchRecipes();

  const [searchString, setSearchString] = useState("");
  const [searchedRecipes, setSearchedRecipes] = useState([]);

  useEffect(() => {
    setSearchedRecipes(recipes);
  }, [recipes]);

  function handleSubmit(event) {
    event.preventDefault();

    const filteredRecipes = recipes.filter((recipe) => {
      const recipeName = recipe.name.toLowerCase();
      return recipeName.includes(searchString);
    });

    setSearchedRecipes(filteredRecipes);
  }

  return (
    <section className="container mx-auto px-2 pb-20">
      <div className="pt-8 pb-14 flex items-center justify-between">
        <h1 className="font-lobster tracking-wider text-4xl drop-shadow-md font-bold flex items-center gap-3">
          <BiFoodMenu /> All Our Recipes
        </h1>

        <form className="join" onSubmit={handleSubmit}>
          <input
            className="input input-bordered join-item w-[18rem]"
            type="text"
            placeholder="Recipe Name"
            value={searchString}
            onChange={(event) => {
              setSearchString(event.target.value.toLowerCase());
            }}
          />
          <button className="btn btn-primary join-item">
            <FaSearch />
            Search
          </button>
        </form>
      </div>
      {searchedRecipes.length ? (
        <div className="grid grid-cols-3 gap-5">
          {searchedRecipes.map((recipe) => {
            return <RecipeCard key={recipe.id} recipe={recipe} />;
          })}
        </div>
      ) : (
        <div className="h-[20rem] text-center py-10 text-3xl opacity-75">
          <p className="flex items-center justify-center gap-4">
            <FaFrownOpen className="size-10" /> No Recipes Found!
          </p>
        </div>
      )}
    </section>
  );
}
