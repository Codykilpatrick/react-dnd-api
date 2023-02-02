import { useState, useEffect } from "react";
import { getSpellDetails } from "../../services/api-calls"
import { useParams } from "react-router-dom"

const SpellDetails = () => {
  const [spellDetails, setSpellDetails] = useState({})
  const params = useParams()

  console.log(params);

  useEffect(() => {
    const fetchSpellDetails = async () => {
      const spellData = await getSpellDetails(params.spellName)
      setSpellDetails(spellData)
    }
    fetchSpellDetails()
  }, [])

  return(
    <>
      <h3>Spell Details</h3>
      { spellDetails.name ?
        <>
          <h1>{spellDetails.name}</h1>
          <img src="http://theoldreader.com/kittens/320/240/" alt=""/>
          <p>{spellDetails.desc[0]}</p>
          {spellDetails.classes.length ?
            <>
              <h3>These classes can use this spell:</h3>
              {spellDetails.classes.map(playerClass =>
                <div key={playerClass.index}>
                  <p>{playerClass.name}</p>
                </div>
              )}
            </>
            :
            <p>No player classes may use this spell</p>
          }
        </>
        :
        <p>Loading Spell Details...</p>
      }
    </>
  )
}

export default SpellDetails