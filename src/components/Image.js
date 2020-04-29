import React, { useState, useContext } from "react"
import { Context } from '../Context'
import propTypes from 'prop-types'

function Image({ className, img }) {
    const [hovered, setHovered] = useState(false)
    const { toggleFavorite } = useContext(Context)

    function heartIcon() {
        if (img.isFavorite) {
            return <i onClick={() => toggleFavorite(img.id)} className="ri-heart-fill favorite"></i>
        } else if (hovered) {
            return <i onClick={() => toggleFavorite(img.id)} className="ri-heart-line favorite"></i>
        }
    }

    const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>

    return (
        <div className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {heartIcon()}
            {cartIcon}

            <img src={img.url} className="image-grid" />
        </div>
    )
}

Image.propTypes = {
    className: propTypes.string,
    img: propTypes.shape({
        id: propTypes.string,
        url: propTypes.string,
        isFavorite: propTypes.bool
    })
}

export default Image
