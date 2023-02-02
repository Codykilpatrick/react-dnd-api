import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <img 
        src="/images/logo.svg" 
        style={{ width: "100px", height: "100px" }}
        className="App-logo"
        alt="logo"
      />
      <container id="nav-container">
        <Link to="/shop">Shop</Link>
        <Link to="/monster-list">Scary Monsters</Link>
        <Link to="/spell-search">Search for Spells</Link>
        <Link to="/class-list">Class List</Link>
      </container>
    </header>
  )
}

export default NavBar