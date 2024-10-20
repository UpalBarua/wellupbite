import { TfiStatsUp } from "react-icons/tfi";
import { useEffect, useState } from "react";

export default function Hero() {
  const [topRecipes, setTopRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      const response = await fetch("https://dummyjson.com/recipes?limit=3");
      const data = await response.json();

      setTopRecipes(data.recipes);
    }

    fetchRecipes();
  }, []);

  return (
    <div className="carousel w-full h-[35rem]">
      {topRecipes.map((recipe, i) => {
        return (
          <div id={`slide${i}`} className="carousel-item relative w-full">
            <img
              src={recipe.image}
              className="w-full object-top object-cover"
            />
            <div className="absolute bg-black/50 text-white text-center gap-4 inset-0 flex flex-col items-center justify-center">
              <span className="flex items-center gap-2">
                <TfiStatsUp className="size-6" />
                85% would make this again
              </span>
              <h1 className="text-5xl font-extrabold">{recipe.name}</h1>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href={`#slide${2 - i}`} className="btn btn-circle">
                ❮
              </a>
              <a href={`#slide${i + 1}`} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
