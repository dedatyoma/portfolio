import './App.css'
import Dashboard from './pages/Dashboard'
import Account from './pages/Account'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
   return(
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/account" element={<Account/>}/>
         </Routes>
      </BrowserRouter>
   )
}

export default App
