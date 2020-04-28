import React, { useState } from "react"

function Image({ className, img }) {
    const [hovered, setHovered] = useState(false)

    return (
        <div className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {hovered ?
                <i className="ri-heart-line favorite"></i>
                : <div></div>}

            {hovered ?
                <i className="ri-add-circle-line cart"></i>
                : <div></div>}
            <img src={img.url} className="image-grid" />
        </div>
    )
}

export default Image
