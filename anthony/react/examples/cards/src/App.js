import './App.css';
import {useEffect, useState, useCallback, useRef} from 'react'
import axios from 'axios'
import Hand from './components/Hand'

function App() {
  const [deckInfo, setDeckInfo] = useState(null)
  const [playerCards, setPlayerCards] = useState([])
  const [dealerCards, setDealerCards] = useState([])
  const [playerScore, setPlayerScore] = useState(0)
  const [dealerScore, setDealerScore] = useState(0)
  const [restart, setRestart] = useState(false)

  const drawBtn = useRef('')
  const stayBtn = useRef('')

  useEffect(() => {
    drawBtn.current.disabled = true
    axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(response => {
      setDeckInfo(response.data)
      drawBtn.current.disabled = false
    })
  }, [restart])

  const drawCard = useCallback(async (hand, name) => {
    const count = hand.length === 0 ? 2 : 1
    const response = await axios.get(`https://deckofcardsapi.com/api/deck/${deckInfo.deck_id}/draw/?count=${count}`)

    setDeckInfo({...deckInfo, remaining: response.data.remaining})

    return [...hand, ...response.data.cards] 
  }, [deckInfo, playerCards, dealerCards])

  const calculateScore = (hand) => {
    const total = hand.reduce((total, card) => {

      card.value = !isNaN(card.value)
      ? parseInt(card.value) :
      card.value === "ACE" ? 1 : 10

      return total + card.value
    }, 0)
    return total
  }


  const handleDealer = useCallback(async () => {

    // ref.current is a reference to the dom element
    drawBtn.current.disabled = true
    stayBtn.current.disabled = true
    let cards = await drawCard(dealerCards)
    setDealerCards(cards)
    let score = calculateScore(cards)
    setDealerScore(score)

    // Under 17, Hit
    while(score < 17) {
      cards = await drawCard(cards)
      setDealerCards(cards)
      score = calculateScore(cards)
    }
    // 17-20, Stay
    // 21, Blackjack
    // Over 21, Bust
    setDealerScore(score)
  }, [dealerCards, dealerScore, deckInfo])

  const handlePlayer = useCallback(async () => {
    let cards = await drawCard(playerCards)
    let score = calculateScore(cards)
    setPlayerCards(cards)
    setPlayerScore(score)
  }, [deckInfo, playerCards, playerScore])

  const restartGame = () => {
    setDeckInfo(null)
    setPlayerCards([])
    setDealerCards([])
    setPlayerScore(0)
    setDealerScore(0)
    setRestart(!restart)
    stayBtn.current.disabled = false
  }

  return (
    <div className="App">
      <button ref={drawBtn} onClick={handlePlayer}>Draw a Card</button>
      <button ref={stayBtn} onClick={handleDealer}>Stay</button>
      <button onClick={restartGame}>Reset</button>
      {dealerCards && <Hand name={`Dealer - ${dealerScore}`} cards={dealerCards}/>}
      {playerCards && <Hand name={`Player - ${playerScore}`} cards={playerCards}/>}
    </div>
  );
}

export default App;
