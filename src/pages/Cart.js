import React, { useContext } from "react"
import { Context } from '../Context'

function Cart() {
    const { cartItems } = useContext(Context)

    const cartItemElements = cartItems.map(item => (
        <h2>{item.id}</h2>
    ))

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
        </main>
    )
}

export default Cart