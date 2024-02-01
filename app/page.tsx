import Testimonial from "@/components/Testimonial/Testimonial";
import ProductCard from "@/components/ProductCard/ProductCard";
import Feature from "@/components/Feature/Feature";
import Cta from "@/components/Cta/Cta"
import Blog from "@/components/Blog/Blog";
import Shop from "@/components/ShopHeader/Shop/Shop";

const Home: React.FC = () => {
  return (
    <>
      <Shop />
      <ProductCard />
      <Feature />
      <Blog />
      <Testimonial />
      <Cta />
    </>
  );
}

export default Home;
