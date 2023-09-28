import React from 'react'
import { Dashboard } from './Components/Dashboard'
import ThemeContextProvider from './Context/ThemeContextProvider'


export default function App() {

  return (
    <ThemeContextProvider>
        <Dashboard />
    </ThemeContextProvider>
  )
}