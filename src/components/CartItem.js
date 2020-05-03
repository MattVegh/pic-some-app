import React, { useContext, useState } from 'react'
import { Context } from '../Context'

function CartItem({ item }) {
    const [hovered, setHovered] = useState(false)
    const { removeFromCart } = useContext(Context)

    function trashIcon() {
        if (hovered) {
            return <i
                onClick={() => removeFromCart(item.id)}
                className='ri-delete-bin-fill'
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            ></i>
        } else {
            return <i
                onClick={() => removeFromCart(item.id)}
                className='ri-delete-bin-line'
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            ></i>
        }
    }
    return (
        <div className='cart-item'>
            {trashIcon()}
            <img src={item.url} width='130px' />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem