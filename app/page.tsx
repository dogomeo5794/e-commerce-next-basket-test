import Header from "@/components/layout/Header";
import scss from "./Home.module.scss";
import ProductCardLargeList from "@/components/cards/ProductCardLargeList";
import { Button } from "@mui/material";
import AppBar from "@/components/appbar";
import ShopHeader from "@/components/ShopHeader/ShopHeader";
import Footer from "@/components/Footer/Footer";
import Testimonial from "@/components/Testimonial/Testimonial";
import ProductCard from "@/components/ProductCard/ProductCard";
import Feature from "@/components/Feature/Feature";
import Cta from "@/components/Cta/Cta"
import Blog from "@/components/Blog/Blog";

const Home: React.FC = () => {
  return (
    <>
      <ShopHeader />
      <ProductCard />
      <Feature />
      <Blog />
      <Testimonial />
      <Cta />
      <Footer />

      {/* <Header />
      <main className={scss.main}>
        <Button variant="contained">test</Button>
        <ProductCardLargeList />
      </main> */}
    </>
  );
}

export default Home;
