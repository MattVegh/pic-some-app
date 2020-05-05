import React, { useContext } from "react"
import { Context } from '../Context'
import PropTypes from 'prop-types'
import useHover from '../hooks/useHover'

function Image({ className, img }) {
    const [hovered, ref] = useHover()
    const { toggleFavorite, addToCart, removeFromCart, cartItems } = useContext(Context)

    function heartIcon() {
        if (img.isFavorite) {
            return <i onClick={() => toggleFavorite(img.id)} className="ri-heart-fill favorite"></i>
        } else if (hovered) {
            return <i onClick={() => toggleFavorite(img.id)} className="ri-heart-line favorite"></i>
        }
    }

    function cartIcon() {
        const inCart = cartItems.some(target => target.id === img.id)
        if (inCart) {
            return <i onClick={() => removeFromCart(img.id)} className="ri-shopping-cart-fill cart"></i>
        } else if (hovered) {
            return <i onClick={() => addToCart(img)} className="ri-add-circle-line cart"></i>
        }
    }

    return (
        <div className={`${className} image-container`} ref={ref} >
            {heartIcon()}
            {cartIcon()}

            <img src={img.url} className="image-grid" alt='Image Grid' />
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image
