import { useState, useEffect } from "react"
import { getClassDetails } from "../../services/api-calls"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const ClassDetails = () => {
  const [classDetails, setClassDetails ] = useState(null)
  const params = useParams()

  useEffect(() => {
    const fetchClassDetails = async () => {
      const classData = await getClassDetails(params.class)
      setClassDetails(classData)
    }
    fetchClassDetails()
  }, [])

  const loading = () => {
    <div>Loading.....</div>
  }

  console.log(classDetails);

  return (
    classDetails ?
      <>
        <h1>{classDetails.name}</h1>
        <p>Hit die:{classDetails.hit_die}</p>
        <h3>Proficiencies</h3>
        <ul>
        {classDetails.proficiencies.map(prof =>
          <li key={prof.index}>{prof.name}</li>)}
        </ul>
        <h4>Starting Equipment:</h4>
        {classDetails.starting_equipment.map(equip =>
          <Link to={`/${equip.equipment.index}`} state={{equip}}>{equip.equipment.name}</Link>
          )}
      </>
    :
    loading()
  )
}

export default ClassDetails