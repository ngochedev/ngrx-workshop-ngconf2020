import { createAction, props } from "@ngrx/store";
import { BookModel } from "src/app/shared/models";
import { BookRequiredProps } from '../../shared/models/book.model';

export const bookCreated = createAction('[Book API] Book created', props<{ book: BookModel }>());
export const booksLoaded = createAction('[Book API] Books Loaded', props<{ books: BookModel[]}>());
export const bookUpdated = createAction('[Book API] Book updated', props<{ book: BookModel }>());
export const bookDeleted = createAction('[Book API] Book deleted', props<{ bookId: string}>());