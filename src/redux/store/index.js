import { legacy_createStore as createStore } from "redux";
import airdata from '../reducers/airdata'

const store = createStore(airdata)

export default store