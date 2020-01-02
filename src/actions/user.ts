import { Action, ActionType, User, Movie } from "../model";

export function addUser(user: User): Action<User> {
	return {
		type: ActionType.ADD_USER,
		payload: user,
	};
}
export function addMovie(movie: Movie): Action<Movie> {
	return {
		type: ActionType.ADD_MOVIE,
		payload: movie,
	};
}

