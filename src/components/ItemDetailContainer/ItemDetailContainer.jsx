import React from "react";
import { useParams, Link } from "react-router-dom";
import useAsyncMock from "../../hooks/useAsyncMock";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const { data, loading } = useAsyncMock(products);

  if (loading) return <div>Cargando...</div>;

  const product = data.find(item => item.id === Number(itemId));

  if (!product) return <div>Producto no encontrado</div>;

  return (
    <div>
      <Link to="/">Volver al catálogo</Link>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>ID del Producto: {product.id}</p>
      <p>Precio: ${product.price.toFixed(2)}</p>
      <p>Categoría: {product.category}</p>
      <p>Stock disponible: {product.stock}</p>
      {product.itHasDues && <p>Hasta tres cuotas sin interés</p>}
      {product.isAnOffer && <p>Oferta especial</p>}
    </div>
  );
}

export default ItemDetailContainer;