import { History } from "history";
import { combineReducers } from "redux";
import { User } from "../model";
import * as userReducer from "./user";

export interface RootState {
	user:User;
}

export default (history: History) =>
	combineReducers({
		...userReducer,
	});
