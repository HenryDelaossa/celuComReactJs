import "./App.css";
import Rutas from "./Routes/Index";
import CartContext from "./Context/CartContext";

export default function App() {
  return (
    <>
      <CartContext>
        <Rutas />
      </CartContext>
    </>
  );
}
