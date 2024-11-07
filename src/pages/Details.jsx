import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { LuTimer } from "react-icons/lu";
import { IoIosTimer } from "react-icons/io";
import { GrGroup } from "react-icons/gr";
import { VscDebugBreakpointLog } from "react-icons/vsc";

export default function Details() {
  const params = useParams();
  const [recipeDetails, setRecipeDetails] = useState({});

  async function fetchRecipeDetails() {
    const response = await fetch(`https://dummyjson.com/recipes/${params.id}`);
    const data = await response.json();
    setRecipeDetails(data);
  }

  useEffect(() => {
    fetchRecipeDetails();
  }, []);

  return (
    <main className="container mx-auto px-2 grid gap-8 pt-4 pb-16 lg:grid-cols-2">
      <div className="space-y-4">
        <img
          className="h-64 lg:h-80 w-full object-center object-cover rounded-lg shadow mb-6"
          src={recipeDetails.image}
          alt={recipeDetails.name}
        />
        <h1 className="font-lobster text-3xl lg:text-4xl">
          {recipeDetails.name}
        </h1>
        <ul className="flex items-center gap-4">
          <li className="flex items-center gap-2 text-xl">
            <LuTimer className="size-5 opacity-80" />
            {recipeDetails.prepTimeMinutes} Min
          </li>
          <li className="flex items-center gap-2 text-xl">
            <IoIosTimer className="size-5 opacity-80" />
            {recipeDetails.cookTimeMinutes} Min
          </li>
          <li className="flex items-center gap-2 text-xl">
            <GrGroup className="size-5 opacity-80" />
            {recipeDetails.servings} Person
          </li>
        </ul>
        <p className="leading-relaxed opacity-80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aut
          voluptate corrupti, nesciunt, consequuntur eveniet, voluptatibus odio
          commodi accusamus porro labore quis?
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
        <div className="space-y-4">
          <h2 className="font-lobster text-2xl lg:text-3xl">Ingredients</h2>
          <ul className="opacity-80 leading-relaxed space-y-2 ps-4">
            {recipeDetails?.ingredients?.map((ingredient) => {
              return (
                <li key={ingredient} className="flex items-start gap-2">
                  <span>
                    <VscDebugBreakpointLog className="mt-1" />
                  </span>
                  {ingredient}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="font-lobster text-2xl lg:text-3xl">Instructions</h2>
          <ul className="opacity-80 leading-relaxed space-y-2 ps-4">
            {recipeDetails?.instructions?.map((instruction) => {
              return (
                <li key={instruction} className="flex items-start gap-2">
                  <span>
                    <VscDebugBreakpointLog className="mt-1" />
                  </span>
                  {instruction}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
}
