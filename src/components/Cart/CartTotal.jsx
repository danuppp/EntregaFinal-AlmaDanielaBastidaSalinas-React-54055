import { useContext } from "react";
import { dataContext } from "../DataContext";

const CartTotal = () => {
  const { cart } = useContext(dataContext);

  const total = cart.reduce(
    (acc, element) => acc + element.price * element.quanty,
    0
  ).toFixed(2);

  return (
    <div className="cartTotal">
      <h3>Total compra: {total} $</h3>
    </div>
  );
};

export default CartTotal;
