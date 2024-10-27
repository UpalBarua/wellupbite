import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TopRecipes from "../components/TopRecipes";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TopRecipes />
      <Newsletter />
    </div>
  );
}
