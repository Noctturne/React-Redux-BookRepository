import React, {useState} from 'react';
// Actions
import {createNewBookAction} from '../../Actions/bookActions';
// useDispatch -> mandar ejecutar las funciones
// useSelector -> acceder al state
import {useDispatch, useSelector} from 'react-redux';

const NewBook = ({history}) => {
    // State
    const [title, saveTitle] = useState('');
    const [author, saveAuthor] = useState('');
    const [genre, saveGenre] = useState('');
    const [review, saveReview] = useState('');

    // Funciones para llamar al action
    const dispatch = useDispatch();
    const addBook = (book) => dispatch(createNewBookAction(book));

    // Acceder al State del Store, cuando esté cargando mostraremos un spinner
    const loading = useSelector((state) => state.books.loading);
    const error = useSelector((state) => state.books.error);

    const submitNewBook = e => {
        e.preventDefault();

        // Validar
        if(title.trim() === ''){
            return;
        }
        
        addBook({
            title,
            author,
            genre,
            review
        });

        //Redireccionar al home
        history.push('/');
    }


    return (
        <div className="row g-0 justify-content-center">
            {error
                ?
                <div className="col-12">
                    <div class="alert alert-warning alert-dismissible fade show text-center" role="alert">
                        <strong>Oops!</strong> Algo pasó, inténtalo de nuevo.
                    </div>
                </div>
                : 
                null
            }
            {loading 
                ?
                <div className="d-flex justify-content-center m-4">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                :
                <div className="col-10 col-md-8 col-lg-6">
                <form className="form-group text-center m-4" onSubmit={submitNewBook}>
                    <div className="form-field my-3">
                        <input name="title" value={title}  onChange={e => saveTitle(e.target.value)} 
                            type="text" className="form-control" placeholder=" Título"></input>
                    </div>
                    <div className="form-field my-3">
                        <input name="author" value={author} onChange={e => saveAuthor(e.target.value)}
                            type="text" className="form-control" placeholder=" Autor"></input>
                    </div>
                    <div className="form-field my-3">
                        <select name="genre" value={genre} onChange={e => saveGenre(e.target.value)}
                            className="form-select w-auto" aria-label="Default select">
                            <option defaultValue> Género </option>
                            <option value="aventura"> Aventura </option>
                            <option value="scifi"> Ciencia Ficción </option>
                            <option value="terror"> Terror y Misterio </option>
                            <option value="romance"> Romance </option>
                            <option value="teatro"> Teatro </option>
                            <option value="otro"> Otro </option>
                        </select>
                    </div>
                    <div className="form-field my-3">
                        <textarea name="review" value={review} onChange={e => saveReview(e.target.value)}
                            className="form-control" rows="15" placeholder="Reseña"></textarea>
                    </div>
                    <div className="form-field my-3">
                        <button type="submit" className="btn btn-custom"> AGREGAR </button>
                    </div>
                </form>
            </div>
          }
        </div>
    );
}

export default NewBook;