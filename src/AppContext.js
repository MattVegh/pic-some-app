import React, { useState } from 'react'
const AppContext = React.createContext()

function AppContextProvider(props) {
    const [ pics, setPics ] = useState([])

    return (
        <AppContext.Provider value={{pics, setPics}}>
            { props.children }
        </AppContext.Provider>
    )
}

export { AppContextProvider, AppContext}