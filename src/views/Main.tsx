import React, { useState } from 'react'
import Login from './Login'
import Navigation from './Navigation'

const Main = () => {
    const [isStarted, setIsStarted] = useState(false)

    return isStarted ? (
        <Navigation logoutCallback={() => setIsStarted(false)}>
            <p>now the story has started</p>
        </Navigation>
    ) : (
        <Login loginCallback={() => setIsStarted(true)} />
    )
}

export default Main
