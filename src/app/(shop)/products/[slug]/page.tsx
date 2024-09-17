interface ProductPageParams {
  slug: string;
}

interface ProductPageProps {
  params: ProductPageParams;
}

const ProductPage = ({ params }: ProductPageProps) => {
  return (
    <div className="page">
      <h1>Prodcut { params.slug }</h1>
    </div>
  )
};

export default ProductPage;