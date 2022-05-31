import Card from "./Card"
const Hand = ({cards, name, ...props}) => {
  return (
    <div>
      <h1>{name}</h1>
      <div className="hand">
        {cards.map(card => <Card key={card.code} card={card}/>)}
      </div>
    </div>
  )
}

export default Hand