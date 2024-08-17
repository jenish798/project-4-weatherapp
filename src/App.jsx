import Home from './page'
import './App.css'
import string from './utils'

function App() {
  const {heading} =string

  return (
    <div  className="bg">
      <h1>{heading}</h1>
      <Home/>
    </div>
  )
}

export default App
