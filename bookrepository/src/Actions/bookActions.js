import {ADD_BOOK, ADD_BOOK_SUCCESS, ADD_BOOK_ERROR, BOOKS_ROUTE, 
    START_DOWNLOAD_BOOKS, DOWNLOAD_BOOKS_SUCCESS, DOWNLOAD_BOOKS_ERROR,
    GET_BOOK_DELETE, GET_BOOK_DELETE_SUCCESS, GET_BOOK_DELETE_ERROR,
    GET_BOOK_EDIT, GET_BOOK_EDIT_SUCCESS, GET_BOOK_EDIT_ERROR, STAR_EDIT_BOOK  } from '../Useful/Const';
import axiosClient from '../Useful/Axios';
// Funciones de la vista (pasa un valor y se usa aquí)

// 1. Crear libros
export function createNewBookAction(book){
    return  async (dispatch) => {
        dispatch(addBook());

        try {
            // Insertar en la API
            await axiosClient.post(BOOKS_ROUTE, book);

            dispatch(addBookSuccess(book));
        } catch (error) {
            console.log(error);
            dispatch(addBookError(true));
        }
    }
}

const addBook = () => ({
    type: ADD_BOOK,
    payload: true
});

// Si se guarda en la BD
const addBookSuccess = (book) => ({
    type: ADD_BOOK_SUCCESS,
    payload: book
});

// Si hubo un error
const addBookError = (status) => ({
    type: ADD_BOOK_ERROR,
    payload: status
});


// 2. Descargar libros de la BD
export function getBooksAction(){
    return  async (dispatch) => {
        dispatch(downloadBooks());

        try {
            // Recoger de la API
            const res = await axiosClient.get(BOOKS_ROUTE);
            dispatch(downloadBooksSuccess(res.data));
        } catch (error) {
            console.log(error);
            dispatch(downloadBooksError(true));
        }
    }
}

const downloadBooks = () => ({
    type: START_DOWNLOAD_BOOKS,
    payload: true
});

// Si los trae de la BD
const downloadBooksSuccess = (books) => ({
    type: DOWNLOAD_BOOKS_SUCCESS,
    payload: books
});

// Error
const downloadBooksError = (status) => ({
    type: DOWNLOAD_BOOKS_ERROR,
    payload: status
});


// 3. Eliminar libro
export function deleteBookAction(id){
    return async (dispatch) => {
        dispatch(getBookDelete(id));

        try {
            // Recoger de la API
            await axiosClient.delete(`/books/${id}`);
            dispatch(deleteBookSuccess());
        } catch (error) {
            console.log(error);
            dispatch(deleteBookError());

        }
    }
}

const getBookDelete = id => ({
    type: GET_BOOK_DELETE,
    payload: id
});

const deleteBookSuccess = () => ({
    type: GET_BOOK_DELETE_SUCCESS
});

const deleteBookError = () => ({
    type: GET_BOOK_DELETE_ERROR,
    payload: true
});


// 4. Editar libro
export function editBookAction(book){
    return async (dispatch) => {
        dispatch(getBookEdit(book));
    }
}

const getBookEdit = book => ({
    type: GET_BOOK_EDIT,
    payload: book
})

// Editar un libro en la API y en el state
export function editBookAPI(book) {
    return async (dispatch) => {
        dispatch(editBook());

        try {
          await axiosClient.put(`/books/${book.id}`, book);
            dispatch(editBookSuccess(book));
        } catch (error) {
            dispatch(editBookError());
        }
    }
}

const editBook = () => ({
    type: STAR_EDIT_BOOK
});

const editBookSuccess = (book) => ({
    type: GET_BOOK_EDIT_SUCCESS,
    payload: book
})

const editBookError = () => ({
    type: GET_BOOK_EDIT_ERROR,
    payload: true
});