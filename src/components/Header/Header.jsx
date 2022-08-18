import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Header() {
  const [data, setData] = useState(null)

  const getData = async () => {
    const response = await axios.get('http://localhost:8000/response')
    console.log(response.data)
    setData(response.data['body']['items'])
  }

  useEffect(()=> {
    getData()
  }, [])

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <div>
      <div>Header</div>
      <select name="sidoName">
        <option value="서울">서울</option>
      </select>
      <select>
        {data && data.map((data)=> (
          <option key={data.stationName}>{data.stationName}</option>
        ))}
      </select>
    </div>
  )
}

export default Header