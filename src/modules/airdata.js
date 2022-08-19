import axios from 'axios';

const GET_AIRDATA = "data/GET_AIRDATA"
const GET_AIRDATA_SUCCESS = "data/GET_AIRDATA_SUCCESS"
const GET_AIRDATA_ERROR = "data/GET_AIRDATA_ERROR"

// 초기 값
const initialState = {
  loading: false,
  data: null,
  error: null
}

const getParameters = {
	serviceKey: '아까 위에서 일반 인증키 (Encoding) 이라고 되어있던 부분을 여기 입력해주세요.',
	returnType:'json',
	numOfRows:'100',
	pageNo:'1',
	sidoName: '시/도이름',
	ver:'1.0',
}

// action
export const getAirData = () => async (dispatch, getState) => {
  dispatch({type: GET_AIRDATA})
  try {
    const response = await axios.get('http://localhost:8000/response',{params: getParameters})
    dispatch({type: GET_AIRDATA_SUCCESS, payload: {airdata: response.data['body']['items']}})
  } catch (e) {
    dispatch({type: GET_AIRDATA_ERROR, error: e})
  }
}

// reducer
export default function airdata(state = initialState, action) {
  switch (action.type){
    case GET_AIRDATA:
      return {
        loading: true,
        data: null,
        error: null
      }
    case GET_AIRDATA_SUCCESS:
      return {
        loading: false,
        data: action.payload.airdata,
        error: null
      }
    case GET_AIRDATA_ERROR:
      return {
        loading: false,
        data: null,
        error: action.error
      }
    default:
      return state
  }
}