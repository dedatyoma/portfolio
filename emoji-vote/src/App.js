import { Component } from "react";
import skull from "./assets/skull.png";
import clown from "./assets/clown-face.png";
import hearts from "./assets/face-hearts_.png";
import grinning from "./assets/grinning-face.png";
import joy from "./assets/joy.png";
import "./App.css";

const emojiList = [
  {name: 'skull', img: skull},
  {name: 'clown', img: clown},
  {name: 'hearts', img: hearts},
  {name: 'grinning', img: grinning},
  {name: 'joy', img: joy},
];

class EmojiButton extends Component {
  render() {
    const { name, img, votes, onVote } = this.props;
    return (
      <li>
        <button className="emoji-button" onClick={() => onVote(name)}>
          <img src={img} className="App-logo" alt={name}/>
        </button>
        <p className="counter">{votes[name]}</p>
      </li>
    );
  }
}

class EmojiList extends Component {
  render() {
    const { votes, onVote } = this.props;
    return (
      <div className='emoji-container'>
        <ul className='emoji-list'>
          {emojiList.map(({name, img}) => (
            <EmojiButton 
              key={name}
              name={name}
              img={img}
              votes={votes}
              onVote={onVote}
            />
          ))}
        </ul>
      </div>
    );
  }
}

class WinnerDisplay extends Component {
  render() {
    const { winner } = this.props;
    return winner ? (
      <h3>The best Emoji is <img src={{skull, clown, hearts, grinning, joy}[winner]}/></h3>
    ) : null;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: JSON.parse(localStorage.getItem("emojiVotes")) || {
        skull: 3,
        clown: 7,
        hearts: 6,
        grinning: 5,
        joy: 4,
      },
      winner: null
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.votes !== this.state.votes) {
      localStorage.setItem("emojiVotes", JSON.stringify(this.state.votes));
    }
  }

  handleVote = (emoji) => {
    this.setState(prevState => ({
      votes: {
        ...prevState.votes,
        [emoji]: prevState.votes[emoji] + 1,
      }
    }));
  }

  showResults = () => {
    const winnerEmoji = Object.keys(this.state.votes).reduce((max, emoji) =>
      this.state.votes[emoji] > this.state.votes[max] ? emoji : max
    );
    this.setState({ winner: winnerEmoji });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <EmojiList 
            votes={this.state.votes} 
            onVote={this.handleVote} 
          />
          <p className="sign">Vote For The Best Emoji</p>
          <button className="show" alt="results" onClick={this.showResults}>
            Show Results
          </button>
          <WinnerDisplay winner={this.state.winner} />
        </header>
      </div>
    );
  }
}

export default App;
