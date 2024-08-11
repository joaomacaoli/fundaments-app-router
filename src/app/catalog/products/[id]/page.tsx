import { AddToCartButton } from "./add-to-cart-button";

interface ProductsProps {
  params: {
    id: string
  }
}

export default function Products(props: ProductsProps) {
  return (
    <>
      <h1>Product: {props.params.id}</h1>
      <AddToCartButton />
    </>
  );
}
