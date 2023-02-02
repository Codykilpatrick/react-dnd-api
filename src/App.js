import './App.css'

import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import NavBar from './components/NavBar/NavBar'
import MonsterList from './pages/MonsterList/MonsterList'
import Shop from './pages/Shop/Shop'
import MonsterDetails from './pages/MonsterDetails/MonsterDetails'
import SpellSearch from './pages/SpellSearch/SpellSearch'
import SpellDetails from './pages/SpellDetails/SpellDetails'
import ClassList from './pages/ClassList/ClassList'
import ClassDetails from './pages/ClassDetails/ClassDetails'
import EquipmentDetails from './pages/EquipmentDetails/EquipmentDetails'
import { inventoryData } from './data/data'


function App() {
  const [ shopInventory, setShopInventory ] = useState(inventoryData)
  const [ userInventory, setUserInventory ] = useState([])

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/shop" element={<Shop shopInventory={shopInventory} setShopInventory={setShopInventory} userInventory={userInventory} setUserInventory={setUserInventory}/>}/>
        <Route path="/monster-list" element={<MonsterList />}/>
        <Route path="/monster" element={<MonsterDetails />} />
        <Route path="/spell-search" element={<SpellSearch />} />
        <Route path="/spell/:spellName" element={<SpellDetails />}/>
        <Route path="/class-list" element={<ClassList />}/>
        <Route path="/class-list/:class" element={<ClassDetails />}/>
        <Route path="/:equipment" element={<EquipmentDetails />} />
      </Routes>
    </>
  )
}

export default App
