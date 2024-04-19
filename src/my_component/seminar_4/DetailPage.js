import { useParams } from "react-router-dom";

function DetailPage({ products }) {
  const { productId } = useParams();
  const product = products.find(
    (productId) => product.id === parseInt(productId)
  );

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}

export default DetailPage;
