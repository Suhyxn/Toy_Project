import React from 'react'
import * as S from './style'
import { IoIosPaw } from 'react-icons/io'

function Footer() {
  return (
    <S.Container>
      <S.ContentBox>
        < IoIosPaw />
        <div>
          내 지역 보기
        </div>
      </S.ContentBox>
      <S.ContentBox>
        < IoIosPaw />
        <div>
          전체 지도 보기
        </div>
      </S.ContentBox>
      <S.ContentBox>
        < IoIosPaw />
        <div>
          즐겨찾기
        </div>
      </S.ContentBox>
    </S.Container>
  )
}

export default Footer