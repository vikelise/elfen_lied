import Header from "@/components/header/Header";
import ProductDaySlider from "@/components/productDaySlider/ProductDaySlider";
import Categories from "@/components/categories/Сategories.jsx";
import Lines from "@/components/lines/Lines.jsx";
import BlogSlider from "@/components/blogSlider/BlogSlider.jsx";

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
      <footer></footer>
    </div>
  );
}
