import React, {useContext} from "react"

import Image from "../components/Image"
import { Context } from "../Context"
import { getClass } from "../utils"

function Photos() {
    const { pics } = useContext(Context)
    
    const imageElements = pics.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)} />
    ))
    
    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos