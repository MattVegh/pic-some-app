import React, { useState, useEffect } from 'react'
const AppContext = React.createContext()

function AppContextProvider(props) {
    const [pics, setPics] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
            .then(response => response.json())
            .then((allPics) => {
                setPics([allPics])
            })

    }, [])



    console.log(pics)
    return (
        <AppContext.Provider value={{ pics, setPics }}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContextProvider, AppContext }