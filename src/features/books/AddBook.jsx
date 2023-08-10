import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "./../../Redux/slice/bookSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const numofBook = useSelector((state) => state.bookList.books.length);
  const handleSubmit = (e) => {
    e.preventDefault();
      const book = { id: numofBook + 1, title, author };
      console.log(book);
      dispatch(addBook(book));
      navigate('/show-book', { replace: true });
  };
  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          AddBook
        </button>
      </form>
    </div>
  );
};

export default AddBook;
