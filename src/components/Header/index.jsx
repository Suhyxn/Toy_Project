import React from 'react'
import * as S from './style'

export function Header({airdata}) {

  return (
    <S.MiddleSort>
      <S.RegionSelect name="sidoName">
        <option value="서울">서울</option>
      </S.RegionSelect>
      <S.RegionSelect>
        {airdata.map((data)=> (
          <option key={data.stationName}>{data.stationName}</option>
        ))}
      </S.RegionSelect>
    </S.MiddleSort>
  )
}

export default Header