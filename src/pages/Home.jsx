import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TopRecipes from "../components/TopRecipes";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import LatestRecipes from "../components/LatestRecipes";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TopRecipes />
      <LatestRecipes />
      <Newsletter />
      <Footer />
    </div>
  );
}
