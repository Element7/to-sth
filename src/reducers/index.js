import { combineReducers } from "redux";
import { list } from "./list";
import { filterList } from './filterList'

export default combineReducers({
    list,
    filterList
});