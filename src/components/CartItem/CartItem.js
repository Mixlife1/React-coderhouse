import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext";


export const CartItem = ({id, price, img, title, quantity}) => {
    const { removeItem, total} = useContext(CartContext)

    return (
        <article className="CartItem">

            <header className="Header">
                <h2 className="ItemHeader">
                    { title }
                </h2>
            </header>

            <picture>
                <img src={img} alt={title} className="ItemImg" />
            </picture>
            <section>
                <h3 className="InfoCart">
                    Precio: ${price}
                </h3>
            </section>

            <section>
                <h4 className="InfoCart"> 
                Cantidad: {quantity}
                </h4>
            </section>
            <section>
                <h4 className="InfoCart">
                    Subtotal: ${price * quantity}
                </h4>
            </section>

            <section>
                <h3>Total a pagar: ${total}</h3>
            </section>
            <section>
                <button className="btn btn-danger" onClick={() => removeItem(id)}>Eliminar</button>
            </section>
        </article>
    )


}
export default CartItem;