import React, { useState } from "react"

function Image({ className, img }) {
    const [hovered, setHovered] = useState(false)

    return (
        <div className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            { hovered && <i className="ri-heart-line favorite"></i> }

            { hovered && <i className="ri-add-circle-line cart"></i> }
            <img src={img.url} className="image-grid" />
        </div>
    )
}

export default Image
