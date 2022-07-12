import React, {useState, useContext} from "react"
import { Context } from "../Context"
import CartItem from "../components/CartItem"


function Cart() {
    const { cartItem, emptyCart } = useContext(Context)
    const totalCost = 5.99 * cartItem.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" })
    const [buttonText, setButtonText] = useState("Place Order")

    const cartItemElements = cartItem.map(item => (
        <CartItem key={item.id} item={item} />
        ))
    console.log(cartItem)

    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(() => {
            console.log("order placed!")
            setButtonText("Place Order")
            emptyCart()
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total:{totalCostDisplay}</p>
            {cartItem.length > 0?
                <div className="order-button">
                    <button onClick={placeOrder}>{buttonText}</button>
                </div> :
                <p>You have no items in your cart.</p>
            }
            
        </main>
    )
}

export default Cart