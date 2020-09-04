import { ActionReducerMap, createSelector, MetaReducer } from "@ngrx/store";
import * as fromAuth from "./auth.reducer";
import * as fromBooks from "./books.reducer";

export interface State {
    books: fromBooks.State;
}

export const reducers: ActionReducerMap<State> = {
    books: fromBooks.booksReducer // Pre-Ivey, do fromBooks.reducer - the wrapper function
};

export const metaReducers: MetaReducer<State>[] = [];
