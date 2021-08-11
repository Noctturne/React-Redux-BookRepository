import React, {useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {editBookAPI} from '../../Actions/bookActions';


const EditBook = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [book, saveBook] = useState({
        title: '',
        author: '',
        genre: '',
        review: ''
    });

    const bookEdit = useSelector(state => state.books.bookEdit);

    useEffect(() => {
        saveBook(bookEdit);
    }, [bookEdit]);

    // Leer datos del formulario
    const onChangeForm = e => {
        saveBook({
            ...book,
            [e.target.name] : e.target.value
        })
    }


    const { title, author, genre, review} = book;

    const submitEditBook = e => {
        e.preventDefault();

        dispatch(editBookAPI(book));
        history.push('/');
    }


    return (
        <div className="row g-0 justify-content-center">
                <div className="col-10 col-md-8 col-lg-6 pt-2">
                <Link to={"/"} className="btn btn-red"><i className="far fa-arrow-alt-circle-left fa-2x"></i></Link>
                <form className="form-group text-center m-4" onSubmit={submitEditBook}>
                    <div className="form-field my-3">
                        <input name="title" value={title} onChange={onChangeForm}
                            type="text" className="form-control" placeholder=" Título"></input>
                    </div>
                    <div className="form-field my-3">
                        <input name="author" value={author} onChange={onChangeForm}
                            type="text" className="form-control" placeholder=" Autor"></input>
                    </div>
                    <div className="form-field my-3">
                        <select name="genre" value={genre} onChange={onChangeForm}
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
                        <textarea name="review" value={review} onChange={onChangeForm}
                            className="form-control" rows="15" placeholder="Reseña"></textarea>
                    </div>
                    <div className="form-field my-3">
                        <button type="submit" className="btn btn-custom"> EDITAR </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditBook;