import React, { useState } from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import ItemCount from "../common/ItemCount";

const ProductDetail = ({ product }) => {
  const { id, image, title, price, itHasDues, isAnOffer, stock } = product;
  const [quantityInCart, setQuantityInCart] = useState(0);

  const handleAddToCart = (count) => {
    setQuantityInCart(count);
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className="card-products-container">
        <img src={image} alt={title} />
        <CardContent className="card-products-content">
          <Typography>{title}</Typography>
          <Typography>${price.toFixed(2)}</Typography>
          <Typography>Stock disponible: {stock}</Typography>
          <Typography variant="body2" color="textSecondary">
            {itHasDues && <><PaymentIcon /> Hasta tres cuotas sin interés </>}
          </Typography>
          <ItemCount
            stock={stock}
            initial={quantityInCart}
            onAdd={handleAddToCart}
          />
          <button
            disabled={quantityInCart === 0}
            onClick={() => {
              // Aquí puedes agregar la lógica para agregar al carrito
              console.log(`Agregado al carrito: ${quantityInCart} unidades`);
              setQuantityInCart(0); // Reseteamos la cantidad en el carrito
            }}
          >
            Agregar al carrito
          </button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductDetail;