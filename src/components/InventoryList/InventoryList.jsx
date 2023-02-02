import { Link } from 'react-router-dom';
import './InventoryList.css'

const InventoryList = (props) => {
  props.inventory.forEach(item => {
    item.name = item.name.toLowerCase()
  });


  return (
    <div>
      <h3>{props.title}</h3>
      <ul>
        {props.inventory.map(item => (
          <li key={item.id}>
            <Link to={`/${item.name}`} state={{item}}>{item.name.toUpperCase()}</Link>
            <p>Cost: {item.cost}</p>
            {props.handleAddItem 
              ? <button onClick={() => props.handleAddItem(item)}>
                  Add Item
                </button>
              : <button onClick={() => props.handleRemoveItem(item)}>
                  Remove Item
                </button>
            }
          </li>
        ))}
      </ul>
    </div>
  )
}  

export default InventoryList
