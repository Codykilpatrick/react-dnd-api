import { inventoryData } from "../../data/data"
import InventoryList from "../../components/InventoryList/InventoryList";
import { useState } from "react";
import "./Shop.css"

const style = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-around'
}

const Shop = (props) => {


  const handleAddItem = (item) => {
    // item will be:
    // { id: 62345, name: 'Club', cost: 1, weight: 2 }
    // userInventory will be:
    // []
    props.setUserInventory([...props.userInventory, item])
    // userInventory will be:
    // [{ id: 62345, name: 'Club', cost: 1, weight: 2 }]
    props.setShopInventory(props.shopInventory.filter(el => el.id !== item.id))
  }

  const handleRemoveItem = (item) => {
    // item will be:
    // { id: 62345, name: 'Club', cost: 1, weight: 2 }
    // shopInventory will be:
    // [... everything originally in the shopInventory, minus the Club and Staff]
    props.setShopInventory([...props.shopInventory, item])
    // AFTER the above: 
    // shopInventory will be:
    // [... everything originally in the shopInventory, minus the Staff]


    // userInventory will be: 
    // [
    //  { id: 62345, name: 'Club', cost: 1, weight: 2 },
    //  { id: 22345, name: 'Staff', cost: 5, weight: 4 }
    //]
    props.setUserInventory(props.userInventory.filter(el => el.id !== item.id))
    // AFTER the above: 
    // userInventory will be: 
    // [
    //  { id: 22345, name: 'Staff', cost: 5, weight: 4 }
    //]
  }

  return (
    <main>
      <h1>Shop</h1>
      <section className="shop-section">
        <InventoryList 
          title="Shop Inventory" 
          inventory={props.shopInventory}
          handleAddItem={handleAddItem}
        />
        <InventoryList 
          title="User Inventory" 
          inventory={props.userInventory} 
          handleRemoveItem={handleRemoveItem}
        />
      </section>
    </main>
  )
}

export default Shop
