import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ProductsGrid from "../components/home/ProductsGrid";
import ContactSection from "../components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <WhyChooseUs />
      <ProductsGrid />   
       <ContactSection /> 
    </>
  );
}