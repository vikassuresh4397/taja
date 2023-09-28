import React from 'react'

export const User = ({ isDarkTheme, user }) => {
    const style = {
        color : isDarkTheme ? 'white' : 'black',
        backgroundColor : isDarkTheme ? 'black' : 'white',
        accentColor : isDarkTheme ? 'yellow' : 'blue'
    }
    return (
        <div data-testid = "user" style = {style}>
            <p>Name: {user.name}</p>
            <p>Level: {user.level}</p>
            <input data-testid = "level" type = "range" style = {{accentColor : style.accentColor}} />
        </div>
    )
}