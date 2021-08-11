import { combineReducers } from 'redux';
import bookReducer from './booksReducer';

export default combineReducers({
    books: bookReducer
});