import './App.css'
import Dashboard from './pages/Dashboard'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
   return(
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Dashboard/>}/>
         </Routes>
      </BrowserRouter>
   )
}

export default App
