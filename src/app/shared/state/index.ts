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

export const selectBooksState = (state: State) => state.books;

export const selectActiveBook = createSelector(
    selectBooksState,
    (booksState) => fromBooks.selectActiveBook(booksState)
)

export const selectAllBooks = createSelector(
    selectBooksState,
    (booksState) => fromBooks.selectAll(booksState)
)

export const selectBooksTotalEarning = createSelector(
    selectBooksState,
    (booksState) => fromBooks.selectEarningsTotal(booksState)
)
