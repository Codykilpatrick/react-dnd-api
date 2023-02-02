import { useEffect, useState } from "react"
import { getClassList } from "../../services/api-calls"

import { Link } from 'react-router-dom'

const ClassList = () => {
  const [classList, setClassList] = useState([])

  useEffect(() => {
    const fetchClassList = async () => {
      const classData = await getClassList()
      setClassList(classData.results)
    }
    fetchClassList()
  }, [])
  return (
    <>
      <h3>Class List</h3>
      {classList.map(classTitle => 
        <div key={classTitle.name}>
          <Link to={`/class-list/${classTitle.index}`} state={{classTitle}}>{classTitle.name}
          </Link>
        </div>
      )}
    </>
  )
}

export default ClassList