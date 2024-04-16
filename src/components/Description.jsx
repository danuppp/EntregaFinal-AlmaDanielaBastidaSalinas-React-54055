import React from "react";
import "../styles/details.css";

const Description = ({ product }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <div className="card-text">
          <p><strong>Descripción:</strong> {product.characteristics}</p>
          <p><strong>Cantidad:</strong> {product.quanty} unidades</p>
          <p><strong>Precio:</strong> ${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
