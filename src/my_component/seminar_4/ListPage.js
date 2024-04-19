import { Link } from "react-router-dom";

function ListPage({ products }) {
  return (
    <>
      <h2> Список продуктов</h2>
      <ul>
        {products.map((product) => (
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        ))}
      </ul>
    </>
  );
}

export default ListPage;
