import { Product } from "@/shared";
import styles from "./ProductsGrid.module.css";
import { ProductCard } from "../product-card/ProductCard";

interface ProductsGridProps {
  products: Product[];
}

export const ProductsGrid = ({ products }: ProductsGridProps) => {
  return (
    <div className={styles.productsGrid}>
      {products.map((product) => (
        <ProductCard product={product} key={product.slug} />
      ))}
    </div>
  );
};
