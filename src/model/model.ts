
export interface Movie {
    favGenre: string;
    favMovie: string;
    favActor:string;
    favActoress:string;
    favDirector:string;
}
export interface User {
    name: string;
    email: string;
    country: string;
    age:number;
    gender:string;
    movie:Movie;
}

export enum ActionType {
    ADD_USER,
    ADD_MOVIE
}

export interface Action<T> {
    type: ActionType;
    payload: T;
}