import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ContentSquare() {
  const [data, setData] = useState(null)

  const getParameters = {
    serviceKey:'hRL8jDNgntV6amiFWZQPeHEqRu1mbof%2FJP%2BIoqhYt0g7Qs0UtrwOAWjpBy6BThiIK%2FeiTslekA3BQ%2BujQhXHXg%3D%3D',
    returnType:'json',
    numOfRows:'100',
    pageNo:'1',
    sidoName: '서울',
    ver:'1.0',
  }

  // const getData = async () => {
  //   const response = await axios.get('B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty',{params: getParameters})
  //   console.log(response.data)
  //   setData(response.data['items'])
  // }

    const getData = async () => {
    const response = await axios.get('http://localhost:8000/response',{params: getParameters})
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