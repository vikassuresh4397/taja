import React, { createContext, useState } from 'react'
import App from '../App'

export const ThemeContext = createContext()

export default function ThemeContextProvider() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  return (
      <ThemeContext.Provider value = {{isDarkTheme, setIsDarkTheme}}>
          <App />
      </ThemeContext.Provider>
  )
}