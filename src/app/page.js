import Header from "/src/components/header/Header.jsx";
import ProductDaySlider from "@/components/productDaySlider/ProductDaySlider";
import Categories from "@/components/categories/Сategories.jsx";
import Lines from "@/components/lines/Lines.jsx";
import BlogSlider from "@/components/blogSlider/BlogSlider.jsx";
import Footer from "@/components/footer/Footer.jsx";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <ProductDaySlider />
        <Categories />
        <Lines />
        <BlogSlider />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
