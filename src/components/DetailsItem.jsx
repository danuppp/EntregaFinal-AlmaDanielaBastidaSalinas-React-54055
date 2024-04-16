import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Description from "./Description";
import "../styles/Details.css";
import productos from "../../public/data/data.json";

const DetailsItem = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const product = productos.find((product) => product.id.toString() === id);
    setSelectedProduct(product);
  }, [id]);

  return (
    <div className="detailsItem">
      {selectedProduct ? (
        <React.Fragment>
          <div className="containerLeft">
            <Image imagen={selectedProduct.image} />
          </div>
          <div className="containerRigth">
            <Description product={selectedProduct} />
          </div>
        </React.Fragment>
      ) : (
        <MoonLoader color="#5b00fb" />
      )}
    </div>
  );
};

export default DetailsItem;
