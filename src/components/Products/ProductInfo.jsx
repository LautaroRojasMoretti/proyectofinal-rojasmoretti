import React, { useState } from "react";
import { Modal, Typography } from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import ItemCount from "../common/ItemCount";

const ProductInfo = ({ product, open, setOpen, onAddToCart }) => {
  const { image, title, price, isAnOffer, itHasDues, stock } = product;
  const [quantityInCart, setQuantityInCart] = useState(0);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="modal-content">
        <Typography variant="h4">{title}</Typography>
        <Typography variant="h6" color="primary">
          ${price.toFixed(2)}
        </Typography>
        <Typography>Stock disponible: {stock}</Typography>
        <div className="modal-scroll-content">
          <Typography variant="body2" color="textSecondary">
            {itHasDues && <><PaymentIcon /> Hasta tres cuotas sin interés </>}
          </Typography>
          <ItemCount
            stock={stock}
            initial={quantityInCart}
            onAdd={setQuantityInCart}
          />
          <button onClick={() => onAddToCart(quantityInCart)}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ProductInfo;