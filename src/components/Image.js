import React from 'react'

function Image({className}) {
    return (
        <div className={`${className} image-container`}>
            <img className='image-grid'/>
        </div>
    )
}

export default Image