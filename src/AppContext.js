import React, { useState } from 'react'
const AppContext = React.createContext()

function AppContextProvider(props) {

    return (
        <AppContext.Provider value=''>
            { props.children }
        </AppContext.Provider>
    )
}

export { AppContextProvider, AppContext}