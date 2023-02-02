import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { getDetails } from '../../services/api-calls'

const MonsterDetails = () => {
  const [monsterDetails, setMonsterDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const monsterData = await getDetails(location.state.monster.url)
      console.log(monsterData);
      setMonsterDetails(monsterData)
    }
    fetchDetails()

    // getDetails(location.state.monster.url)
    // .then(monsterData => {
    //   setMonsterDetails(monsterData)
    // })

  }, [location.state.monster.url])

  return ( 
    <>
      <h3>Monster Deets</h3>
      {monsterDetails.image 
        ? <img src={`https://www.dnd5eapi.co${monsterDetails.image}`} alt="" />
        : <img src="http://theoldreader.com/kittens/320/240/" alt="a cat" />
      }
      <h3>{monsterDetails.name}</h3>
      <h4>Size: { monsterDetails.size }</h4>
      <h4>Type: { monsterDetails.type }</h4>
      <h4>AC: { monsterDetails.armor_class }</h4>
      <h4>Actions:</h4>
      { monsterDetails.actions?.length ?
        <>
          {monsterDetails.actions.map(action => (
            <div key={ action.name }>
              <h4>{action.name}</h4>
              <h5>{action.desc}</h5>
            </div>
          ))}
        </>
        :
        <p>This poor monster has no actions. Womp womp.</p>
      }
    </>
  )
}

export default MonsterDetails;