
const Card = ({card}) => {
  const {id, name, spf, price} = card;

  return (
    <div className="Card">
      <img
        alt={`sunscreen ${name}`}
        src={`https://robohash.org/${id}.png?set=set2&size=200x200`}
      />
      <h3>{name}</h3>
      <p>{spf} {price}</p>
    </div>
  )
}

export default Card;