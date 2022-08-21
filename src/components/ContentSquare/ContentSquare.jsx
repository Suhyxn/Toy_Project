import React from 'react'
import * as S from './style'

function ContentSquare({airdata}) {

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

  return (
      <S.Container>
        {airdata.map((data)=> (
          <S.ContentBox>
            <S.ContentTitle>
              <S.StationName>{data.stationName}</S.StationName>
              <S.SidoName>{data.sidoName}</S.SidoName>
            </S.ContentTitle>
            <S.ContentIn>
              <S.Pm10Grade>{data.pm10Grade}</S.Pm10Grade>
              <S.Pm10Value>미세먼지 수치 : {data.pm10Value}</S.Pm10Value>
              <S.DataTime>({data.dataTime} 기준)</S.DataTime>
            </S.ContentIn>
          </S.ContentBox>
        ))}
      </S.Container>
  )
}

export default ContentSquare