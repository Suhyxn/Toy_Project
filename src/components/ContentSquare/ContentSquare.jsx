import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ContentSquare() {
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
      <div>Content</div>
      <div>
        {data && data.map((data)=> (
          <>
          <p>{data.stationName}</p>
          <p>{data.sidoName}</p>
          <p>{data.pm10Grade}</p>
          <p>{data.pm10Value}</p>
          <p>{data.dataTime}</p>
          </>
        ))}
      </div>
    </div>
  )
}

export default ContentSquare