import { Action, ActionType, User, Movie } from "../model";
import createReducer from "./createReducer";
export type State = User
const initialState: State = {name: "",
    email: "",
    country: "",
    age:0,
	gender:"",
	movie:{ favGenre: '',
		favDirector: '',
		favMovie: '',
		favActor:'',
		favActoress:'',}
	}
	
export const user = createReducer<User>(initialState, {
	[ActionType.ADD_USER](state: User, action: Action<User>) {
		return action.payload;
	},
	[ActionType.ADD_MOVIE](state: User, action: Action<Movie>) {
		state.movie = action.payload
		return state;
	}
});
