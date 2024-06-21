import Footer from "./components/footer/footer";
import FeaturesSection from "./components/home/features-section";
import { HeroSection } from "./components/home/hero-section";
import NewReleases from "./components/home/new-releases";
import { NavBar } from "./components/nav/nav-bar";
import { Newsletter } from "./components/news-letter/news-letter";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <HeroSection />
      <NewReleases />
      <FeaturesSection />
      <Newsletter />
      <Footer />
    </main>
  );
}
