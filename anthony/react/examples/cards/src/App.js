import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'
import Hand from './components/Hand'

function App() {
  const [deckInfo, setDeckInfo] = useState(null)
  const [playerCards, setPlayerCards] = useState([])
  const [dealerCards, setDealerCards] = useState([])
  const [playerScore, setPlayerScore] = useState(0)
  const [dealerScore, setDealerScore] = useState(0)

  useEffect(() => {
    axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(response => setDeckInfo(response.data))
  }, [])

  const drawCard = async (hand, name) => {
    const count = hand.length === 0 ? 2 : 1
    const response = await axios.get(`https://deckofcardsapi.com/api/deck/${deckInfo.deck_id}/draw/?count=${count}`)

    setDeckInfo({...deckInfo, remaining: response.data.remaining})

    return [...hand, ...response.data.cards] 
  }

  const calculateScore = (hand, setScore) => {
    console.log("Hello", hand)
    const total = hand.reduce((prev, curr) => {

      console.log("prev", prev)
      prev.value = !isNaN(prev.value)
      ? parseInt(prev.value) :
      prev.value === "ACE" ? 1 : 10

      console.log("curr", curr)
      curr.value = !isNaN(curr.value)
      ? parseInt(curr.value) :
      curr.value === "ACE" ? 1 : 10

      return total + curr.value
    }, 0)
    console.log(total)
  }

  const playDealer = async () => {
    const cards = await drawCard(dealerCards, "dealer")
    setDealerCards(cards)
    calculateScore(cards)
  }

  return (
    <div className="App">
      <button onClick={() => drawCard(playerCards, "player")}>Draw a Card</button>
      <button onClick={playDealer}>Stay</button>
      {playerCards && <Hand name="Player" cards={playerCards}/>}
    </div>
  );
}

export default App;
