import React from 'react'
// import { User } from './Components/User'
import { User } from './User'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContextProvider'

export const Dashboard = () => {
    const { isDarkTheme } = useContext(ThemeContext)
    const users = [{name: 'John', level: 'intermediate'}, {name: 'Doe', level: 'beginner'}]
    return (
        <div data-testid = "dashboard-cont" >
            <select data-testid = "select-theme" onChange = {(e) =>  isDarkTheme ? isDarkTheme = false : isDarkTheme = true} >
                <option >Light Theme</option>
                <option >Dark Theme</option>
            </select>
            { users.map(user => <User key = {user.name} isDarkTheme = {isDarkTheme} user = {user} />)}
        </div>
)
}