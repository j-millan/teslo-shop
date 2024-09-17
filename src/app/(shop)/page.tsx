// import styles from "./page.module.css";

import { ProductsGrid } from "@/products";
import { initialData } from "@/seed/seed";
import { Title } from "@/shared/components/title/Title";

const ShopPage = () => {
  const products = initialData.products;

  return (
    <div className="page">
      <Title title="Teslo Shop" subtitle="All products" />
      <ProductsGrid products={products} />
    </div>
  );
};

export default ShopPage;
