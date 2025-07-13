import Header from "@/components/header/Header";
import ProductDaySlider from "@/components/productDaySlider/ProductDaySlider";
import Categories from "@/components/categories/Сategories.jsx";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <ProductDaySlider />
        <Categories />
      </main>
      <footer></footer>
    </div>
  );
}
