import Categories from "../components/Categories";
import CustomerPick from "../components/CustomerPick";
import Hero from "../components/Hero";
import InsperationCarousel from "../components/InsperationCarousel";
import ProductCarousel from "../components/ProductCarousel";
import TextSection from "../components/TextSection";

interface Story {
  points: number;
  title: string;
  author: string;
}

export default function StartPage() {
  return (
    <>
      <Hero />
      <ProductCarousel />
      <Categories />
      <CustomerPick />
      <TextSection />
      <InsperationCarousel />
    </>
  );
}
