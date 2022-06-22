const Card = ({card}) => {
  return (
    <div>
      <img src={card.image} alt={`${card.value} of ${card.suit}`} title={`${card.value} of ${card.suit}`}/>
    </div>
  )
}

export default Card