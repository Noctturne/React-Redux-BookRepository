import React from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import {deleteBookAction, editBookAction} from '../../Actions/bookActions';

const Book = ({book}) => {

    const dispatch = useDispatch();
    const history = useHistory(); // Habilitarlo para redireccionar
    // Confirmar eliminar
    const confirmDeleteBook = id => {
        // Preguntar
        // Pasarlo
        dispatch(deleteBookAction(id));
    }

    const {title, author, review, id} = book;
    const cutTitle = title.substring(0, 30);
    const cutRev = review.substring(0, 70);

    // Redirigir de forma programada
    const redirectEdit = book => {
        dispatch(editBookAction(book));
        history.push(`/books/edit/${book.id}`);
    }


    return(
        <div className="book my-3 mx-4 p-3">
           <button className="btn btn-red" onClick={() => redirectEdit(book)}> <h4><i className="fas fa-window-minimize"></i>  {cutTitle} </h4></button>
            <p> {cutRev}... </p>
            <small>{author} </small> 
            <button type="button" className="btn btn-red" 
                onClick={() => confirmDeleteBook(id)}><i className="fas fa-times"></i></button>
        </div>
    );
}

export default Book;