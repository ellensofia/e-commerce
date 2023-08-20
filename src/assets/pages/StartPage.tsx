import Categories from "../components/Categories";
import CustomerPick from "../components/CustomerPick";
import Hero from "../components/Hero";
import InsperationCarousel from "../components/InsperationCarousel";
import ProductCarousel from "../components/ProductCarousel";
import Socials from "../components/Socials";
import TextSection from "../components/TextSection";

export default function StartPage() {
  return (
    <>
      <Hero />
      <ProductCarousel />
      <Categories />
      <CustomerPick />
      <InsperationCarousel />
      <TextSection />
      <Socials />
    </>
  );
}
