import axios from 'axios'
import React, { useEffect, useState } from 'react'
import * as S from './style'

export function Header() {
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
    <S.MiddleSort>
      <S.RegionSelect name="sidoName">
        <option value="서울">서울</option>
      </S.RegionSelect>
      <S.RegionSelect>
        {data && data.map((data)=> (
          <option key={data.stationName}>{data.stationName}</option>
        ))}
      </S.RegionSelect>
    </S.MiddleSort>
  )
}

export default Header