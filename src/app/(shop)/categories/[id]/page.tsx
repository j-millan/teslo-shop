import styles from "./page.module.css";

import { notFound } from "next/navigation";

const VALID_CATEGORIES = [
  'men',
  'women',
  'children',
];

interface CategoryPageParams {
  id: string;
}

interface CategoryPageProps {
  params: CategoryPageParams,
}

const CategoryPage = ({ params }: CategoryPageProps) => {
  if (!VALID_CATEGORIES.includes(params.id)) notFound();
  
  return (
    <div className="page">
      <h1 className={styles.title}>{params.id}</h1>
      <span>Category {params.id}</span>
    </div>
  );
};

export default CategoryPage;
