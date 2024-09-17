// import styles from "./page.module.css";

interface OrderPageParams {
  id: string;
}

interface OrderPageProps {
  params: OrderPageParams;
}

const OrderPage = ({ params }: OrderPageProps) => {
  return (
    <div className="page">
      <h1>Order #{params.id}</h1>
    </div>
  );
};

export default OrderPage;
