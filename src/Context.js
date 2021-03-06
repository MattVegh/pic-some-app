import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider({ children }) {
    const [pics, setPics] = useState([])
    const [cartItems, setCartItems] = useState([])

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPics(data))
    }, [])

    function toggleFavorite(id) {
        const updatedPicArr = pics.map(photo => {
            if (photo.id === id) {
                console.log(id)
                console.log(!photo.isFavorite)
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }
            }
            return photo
        })
        setPics(updatedPicArr)
    }

    function addToCart(img) {
        setCartItems([...cartItems, img])
    }

    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }
    
    function emptyCart() {
        setCartItems([])
    }

    return (
        <Context.Provider value={{ pics, toggleFavorite, addToCart, removeFromCart, cartItems, emptyCart }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }