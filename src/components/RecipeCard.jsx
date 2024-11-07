import { LuClock } from "react-icons/lu";
import { IoStar } from "react-icons/io5";
import { IoFlagOutline } from "react-icons/io5";
import { IoChevronForwardSharp } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export default function RecipeCard(props) {
  const recipe = props.recipe;

  function addToFavourites(recipe) {
    const favouriteRecipes = getLocalStorage();

    const isExisting = favouriteRecipes.some((favouriteRecipe) => {
      return favouriteRecipe.id === recipe.id;
    });

    if (isExisting) {
      const filteredRecipes = favouriteRecipes.filter((favouriteRecipe) => {
        return favouriteRecipe.id !== recipe.id;
      });

      setLocalStorage(filteredRecipes);

      return;
    }

    setLocalStorage([...favouriteRecipes, recipe]);
  }

  return (
    <div className="bg-base-200/25 border shadow-sm rounded-md">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="rounded-tl-md rounded-tr-md border-b"
      />
      <div className="px-3 py-2 lg:px-4 lg:py-3 space-y-3">
        <h4 className="text-xl lg:text-2xl font-medium">{recipe.name}</h4>
        <div className="flex flex-col gap-2 lg:flex-row lg:gap-5 text-lg">
          <div className="flex items-center gap-2">
            <IoStar className="text-yellow-500" />
            {recipe.rating} ({recipe.reviewCount})
          </div>
          <div className="flex items-center gap-2">
            <LuClock className="text-green-500" />
            {recipe.prepTimeMinutes + recipe.cookTimeMinutes} Min
          </div>
          <div className="flex items-center gap-2">
            <IoFlagOutline className="text-blue-500" />
            {recipe.cuisine}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 pt-4">
          <button
            onClick={() => addToFavourites(recipe)}
            className="btn btn-outline"
          >
            <IoMdHeartEmpty className="size-5 hidden lg:block" /> Favourite
          </button>
          <Link to={`/recipes/${recipe.id}`} className="btn btn-primary">
            View <span className="hidden lg:block">Recipe</span>{" "}
            <IoChevronForwardSharp className="size-5 hidden lg:block" />
          </Link>
        </div>
      </div>
    </div>
  );
}
