import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getEquipmentDetails } from "../../services/api-calls"

const EquipmentDetails = () => {
  const [equipmentDetails, setEquipmentDetails] = useState(null)
  const params = useParams()

  useEffect(() => {
    const fetchEquipmentDetails = async () => {
      const equipmentData = await getEquipmentDetails(params.equipment)
      setEquipmentDetails(equipmentData)
    }
    fetchEquipmentDetails()
  }, [])

  const loading = () => {
    <div>Loading.....</div>
  }

  return (
    equipmentDetails ?
    <>
    <h1>{equipmentDetails.name}</h1>
    <p>{equipmentDetails.desc}</p>
    </>
    :
    loading()
  )
}

export default EquipmentDetails