import { GET_AIRDATA, GET_AIRDATA_SUCCESS, GET_AIRDATA_ERROR } from "../constants/airdata";

const initialState = {
  loading: false,
  data: null,
  error: null
}

export default function airdata(state = initialState, action) {
  switch (action.type){
    case GET_AIRDATA:
      return {
        loading: true,
        data: null,
        erro: null
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