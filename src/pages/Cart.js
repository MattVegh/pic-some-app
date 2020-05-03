import React, { useContext, useState } from 'react'
import { Context } from '../Context'
import CartItem from '../components/CartItem'

function Cart() {
    const { cartItems, emptyCart } = useContext(Context)
    const [ buttonText, setButtonText ] = useState('Place Order')
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))
    
    const totalPrice = (5.99 * cartItems.length).toLocaleString('en-US', {style: 'currency', currency: 'USD'})

    function placeOrder() {
        setButtonText('Ordering...')
        setTimeout(() => {
            console.log('order placed')
            setButtonText('Place Order')
            emptyCart()
        }, 3000)
    }

    return (
        <main className='cart-page'>
            <h1>Check out</h1>
            {cartItemElements}
            <p className='total-cost'>Total: {totalPrice}</p>
            <div className='order-button'>
                <button onClick={placeOrder} >{buttonText}</button>
            </div>
        </main>
    )
}

export default Cart