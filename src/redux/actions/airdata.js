import axios from 'axios';
import { GET_AIRDATA, GET_AIRDATA_SUCCESS, GET_AIRDATA_ERROR } from '../constants/airdata'

const getParameters = {
	serviceKey:'hRL8jDNgntV6amiFWZQPeHEqRu1mbof%2FJP%2BIoqhYt0g7Qs0UtrwOAWjpBy6BThiIK%2FeiTslekA3BQ%2BujQhXHXg%3D%3D',
	returnType:'json',
	numOfRows:'100',
	pageNo:'1',
	sidoName: '서울',
	ver:'1.0',
}

// export const getAirData = () => async (dispatch, getState) => {
//   dispatch({type: GET_AIRDATA})
//   try {
//     const response = await axios.get('B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty',{params: getParameters})
//     dispatch({type: GET_AIRDATA_SUCCESS, payload: {airdata: response.data['body']['items']}})
//   } catch (e) {
//     dispatch({type: GET_AIRDATA_ERROR, error: e})
//   }
// }

export const getAirData = () => async (dispatch, getState) => {
  dispatch({type: GET_AIRDATA})
  try {
    const response = await axios.get('http://localhost:8000/response',{params: getParameters})
    dispatch({type: GET_AIRDATA_SUCCESS, payload: {airdata: response.data['body']['items']}})
  } catch (e) {
    dispatch({type: GET_AIRDATA_ERROR, error: e})
  }
}