import React, {Fragment, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

import {useDispatch, useSelector} from 'react-redux';
import {getBooksAction} from '../../Actions/bookActions';

const Books = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // Consultar la API
        const loadingBooks = () => dispatch(getBooksAction());
        loadingBooks();
    }, []);

    const books = useSelector(state => state.books.books);
    const error = useSelector(state => state.books.error);
    const loading = useSelector((state) => state.books.loading);

    return (
        <Fragment>
            <div className="row g-0">
                {error
                        ?
                        <div className="col-12">
                            <div className="alert alert-warning alert-dismissible fade show text-center" role="alert">
                                <strong>Oops!</strong> Algo pasó, inténtalo de nuevo.
                            </div>
                        </div>
                        : 
                        null
                }
                <div className="col-12 offset-lg-4 col-lg-4">
                    {loading
                    ?
                    <div className="d-flex justify-content-center m-4">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    : null
                    }
                    {books.length === 0 ? <p className="text-center"><strong> No hay libros para mostrar </strong></p> :
                            books.map(book => (
                                <Book
                                    key={book.id}
                                    book={book}
                                />
                            ))
                    }
                </div>
            </div>
            <Link to={"/books/new"} className="btn-floating link-light"><i className="fas fa-plus fa-2x"></i></Link> 
        </Fragment>

    );
}

export default Books;