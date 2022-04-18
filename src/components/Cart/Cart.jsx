import { useContext } from "react"
import { Link } from "react-router-dom"
import { CarrrContext } from "../../Context/CartContext"
import Banners from "../Banners/Banners";
import TheCarousel from "../Carousel/Carousel";
import CartItmsAdded from "./CartItmsAdded"
import { scrollArriba } from "../../Helpers/Helpers"

export default function Cart() {
    scrollArriba()
    const { cartItm } = useContext(CarrrContext);
    return (
        <>
            <div className="cart">
                {
                    cartItm.length === 0 ? (
                        <div>
                            <div className="divCtnCartEmpty">
                                <h2 >carrito vacio</h2>
                                <Link to={"/categ/todo"}>ir a comprar</Link>
                            </div>
                            <Banners lengt={8} greet={"Recomendaciones"} />
                        </div>
                    ) :
                        <div className="divCtnItemsPedido">
                            <h2 >tu pedido</h2>
                            <CartItmsAdded productsToAdd={cartItm} />
                        </div>
                }
            </div>
            
            <TheCarousel />
        </>
    )
}