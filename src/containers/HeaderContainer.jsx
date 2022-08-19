import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import { getAirData } from '../modules/airdata'

function HeaderContainer() {
  const dispatch = useDispatch()
  const { loading, data, error } = useSelector(state => state.airdata)

  useEffect(() => {
    !data && dispatch(getAirData())
  }, [data,dispatch])

  if (loading) return <div>로딩중...</div>
  if (error) return <div>Error</div>
  if (!data) return null
  return (
    <Header airdata={data}/>
  )
}

export default HeaderContainer