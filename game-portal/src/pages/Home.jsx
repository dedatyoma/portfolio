import { useNavigate } from "react-router-dom";
import memory_img from '../assets/memory.png';
import rps_img from '../assets/RPS.png';
import ttt_img from '../assets/tic-tac-toe.png';
import user from '../assets/user.png';
import '../pages/page-styles/Home.css';

const games = [
  {id:'tic-tac-toe', name: 'Tic Tac Toe', Image: ttt_img},
  {id:'rps', name: 'Rock Paper Scissors', Image: rps_img},
  {id:'memory', name: 'Memory Game', Image: memory_img}
];
export default function Home() {
  const navigate = useNavigate();
  
  return(
    <>
      <header>
        <button className="user">
          <img src={user} alt="" />
        </button>
        <button className="theme"></button>
      </header>
      <h1 className="welcome">Welcome to the Game Portal</h1>
      <h1>Choose your game</h1>
      <div className="all-games">
        <ul className="game-menu">
          <li className="game-item">
            {games.map((game) => (
              <button className="game-button" key={game.id} onClick={() => navigate(`/${game.id}`)}>
                <img className="game-img" src={game.Image} alt={game.name} />
              </button>
            ))}
          </li>
        </ul>
        <div className="achievement-menu">
          <button className="show">Show my achievements</button>
        </div>
      </div>
    </>
  )
}