import React, { useContext } from "react"
import Image from "../components/Image"
import { getClass } from "../utils"
import { AppContext } from "../AppContext"

function Photos() {
    const { pics } = useContext(AppContext)
    console.log(pics)
    return (
        <main className="photos">
            <h1>Images go here</h1>
        </main>
    )
}

export default Photos