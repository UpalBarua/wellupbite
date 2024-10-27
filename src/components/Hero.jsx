import { TfiStatsUp } from "react-icons/tfi";
import { useEffect, useState } from "react";

export default function Hero() {
  const [topRecipes, setTopRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      const response = await fetch("https://dummyjson.com/recipes?limit=5");
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
              className="w-full object-center object-cover"
            />
            <div className="absolute bg-black/25 text-center inset-0 flex flex-col items-center justify-center">
              <div className="bg-base-100 te flex items-center justify-center flex-col text-center p-8 gap-4 rounded-md shadow-lg">
                <span className="flex items-center gap-2">
                  <TfiStatsUp className="size-6" />
                  85% would make this again
                </span>
                <h1 className="text-5xl font-extrabold pb-4">{recipe.name}</h1>
                <p className="text-lg leading-relaxed max-w-[60ch] text-black/60 text-pretty">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  vero repellendus neque quo, veniam molestiae dolores vel
                  suscipit reiciendis ipsa praesentium nam labore mollitia magni
                  illum ullam corrupti odit commodi voluptas veritatis
                  explicabo. Quae, nulla harum ab eligendi ad quos!
                </p>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href={`#slide${i - 1}`} className="btn btn-circle btn-sm">
                ❮
              </a>
              <a href={`#slide${i + 1}`} className="btn btn-circle btn-sm">
                ❯
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
