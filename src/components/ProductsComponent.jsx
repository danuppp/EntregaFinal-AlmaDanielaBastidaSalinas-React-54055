import React, { useContext, useState } from "react";
import { dataContext } from "./DataContext";
import Description from "./Description";
import "../styles/Products.css";

const ProductsComponent = () => {
  const { data, buyProduct, addedToCart } = useContext(dataContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = (product) => {
    setSelectedProduct(product);
    setShowDetails(true);
  };

  return (
    <div className="products-card-container">
      {data.length > 0 &&
        data.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="img-container">
              <img
                src={product.image}
                alt="img-product-card"
                className="product-image"
              />
            </div>
            <div>
              <div className="info-container">
                <h3 className="product-title">{product.name}</h3>
                <h4 className="product-price">{product.price}$</h4>
                <p className="product-characteristics">{product.characteristics}</p>
              </div>
              <div className="buttons">
              <button
                  className="button-detail"
                  onClick={() => handleShowDetails(product)}
                >
                  Detalle del producto
                </button>
                <button
                  onClick={() => buyProduct(product)}
                  className="button-buy"
                >
                  Añadir al carrito
                </button>
                {addedToCart[product.id] && (
                  <div className="addedToCartMessage">
                    Producto añadido al carrito
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      {showDetails && (
       <div className="details-modal">
        <Description product={selectedProduct} />
        </div>
      )}
    </div>
  );
};

export default ProductsComponent;
