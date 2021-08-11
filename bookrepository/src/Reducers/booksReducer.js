import {ADD_BOOK, ADD_BOOK_SUCCESS, ADD_BOOK_ERROR,
    START_DOWNLOAD_BOOKS, DOWNLOAD_BOOKS_SUCCESS, DOWNLOAD_BOOKS_ERROR,
    GET_BOOK_DELETE, GET_BOOK_DELETE_SUCCESS, GET_BOOK_DELETE_ERROR,
    GET_BOOK_EDIT, GET_BOOK_EDIT_SUCCESS, GET_BOOK_EDIT_ERROR  } from '../Useful/Const';

// Cada reducer tiene su propio state
const initialState = {
    books: [],
    error: null,
    loading: false,
    bookDelete: null,
    bookEdit: null
}

export default function(state = initialState, action){
    switch(action.type){
        case START_DOWNLOAD_BOOKS:
        case ADD_BOOK:
            return {
                ...state,
                loading: action.payload
            }
        case ADD_BOOK_SUCCESS:
            return {
                ...state,
                loading: false,
                books: [...state.books, action.payload]
            }
        case GET_BOOK_EDIT_ERROR:
        case GET_BOOK_DELETE_ERROR:
        case DOWNLOAD_BOOKS_ERROR:
        case ADD_BOOK_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
            case DOWNLOAD_BOOKS_SUCCESS:
                return {
                ...state,
                loading: false,
                error: null,
                books: action.payload
            }
            case GET_BOOK_DELETE:
                return {
                ...state,
                bookDelete: action.payload
            }
            case GET_BOOK_DELETE_SUCCESS:
                return {
                ...state,
                books: state.books.filter(book => book.id !== state.bookDelete)
            }
            case GET_BOOK_EDIT:
                return {
                ...state,
                bookEdit: action.payload
            }
            case GET_BOOK_EDIT_SUCCESS:
                return {
                ...state,
                bookEdit: null,
                books: state.books.map( book => book.id === action.payload.id ? book = action.payload : book)
            }
        default:
            return state;
    }
}