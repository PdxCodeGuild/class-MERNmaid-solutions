import client from "../api/client"


const List = ({name, description, items, ...props}) => {

  const handleDelete = () => {
    client.delete(`/lists/${props.id}`)
    console.log(`Deleted: id ${props.id}`)
    props.getLists()
  }

  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <ul>
      {items.map(item => <li>{item.name}</li>)}
      </ul>
      <button onClick={handleDelete} style={{ color: "red" }}>Delete</button>
    </div>
  )
}

export default List