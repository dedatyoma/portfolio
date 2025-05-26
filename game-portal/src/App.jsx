import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Game from './pages/Game'
import ScoreBoard from './pages/ScoreBoard'
import './App.css'

function App() {
    return(
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/game' element={<Game />} />
          <Route path='/scoreboard' element={<ScoreBoard />} />
        </Routes>
      </Router>
    )
}

export default App
