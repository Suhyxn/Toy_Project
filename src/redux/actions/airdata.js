import axios from 'axios';
import { GET_AIRDATA, GET_AIRDATA_SUCCESS, GET_AIRDATA_ERROR } from '../constants/airdata'

const getParameters = {
	serviceKey: '아까 위에서 일반 인증키 (Encoding) 이라고 되어있던 부분을 여기 입력해주세요.',
	returnType:'json',
	numOfRows:'100',
	pageNo:'1',
	sidoName: '시/도이름',
	ver:'1.0',
}

export const getAirData = () => async (dispatch, getState) => {
  dispatch({type: GET_AIRDATA})
  try {
    const response = await axios.get('http://localhost:8000/response',{params: getParameters})
    dispatch({type: GET_AIRDATA_SUCCESS, payload: {airdata: response.data['body']['items']}})
  } catch (e) {
    dispatch({type: GET_AIRDATA_ERROR, error: e})
  }
}