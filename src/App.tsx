import React from 'react'
import './styles/App.css'
import {HomePage} from './pages/HomePage'
import {StateProvider} from './StateProvider'

const App: React.FC = () => {
  return (
    <div className="App">
      <StateProvider>
        <HomePage/>
      </StateProvider>
    </div>
  )
}

export default App
