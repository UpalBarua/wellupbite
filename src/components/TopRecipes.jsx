import useFetchRecipes from "../hooks/useFetchRecipes";
import { TfiStatsUp } from "react-icons/tfi";
import RecipeCard from "./RecipeCard";
import { IoChevronForwardSharp } from "react-icons/io5";

export default function TopRecipes() {
  const { recipes } = useFetchRecipes(9);

  return (
    <section className="pt-32 pb-16 container mx-auto px-2">
      <h2 className="text-4xl drop-shadow-md font-bold text-center flex items-center gap-3 justify-center pb-14">
        <TfiStatsUp /> Our Top Recipes
      </h2>
      <div className="grid grid-cols-3 gap-5">
        {recipes.map((recipe) => {
          return <RecipeCard key={recipe.id} recipe={recipe} />;
        })}
      </div>
      <div className="flex items-center justify-center pt-14">
        <button className="btn btn-outline">
          View All <IoChevronForwardSharp className="size-6" />{" "}
        </button>
      </div>
    </section>
  );
}
