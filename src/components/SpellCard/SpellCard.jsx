import { Link } from "react-router-dom"

import SpellCardChild from "./SpellCardChild"

const SpellCard = (props) => {

  function runConsoleLog(str) {
    console.log(str);
  }

  return (
    <>
      <Link to={`/spell/${props.spell.index}`}>
        {props.spell.name}
      </Link>
      <SpellCardChild 
        spell={props.spell} 
        taco={{name: "bob", flavor:"good"}}
        runConsoleLog={runConsoleLog}
      />
    </>
  )
}

export default SpellCard