import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [pics, setPics] = useState([])
    
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPics(data))
    }, [])
    
    function toggleFavorite(id) {
        const matchedId = pics.find(id => id === pics.id)
        console.log(matchedId)
    }

    return (
        <Context.Provider value={{pics}}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }