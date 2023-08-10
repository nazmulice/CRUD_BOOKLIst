import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import { deleteBook } from "../../Redux/slice/bookSlice";
import deleteBooks from "./delete";

const ViewBook = () => {
    const books = useSelector((state) => state.bookList.books);
    
//   const dispatch = useDispatch();
//   const handleDelete = (i) => {
//     dispatch(deleteBook(i));
//   };

  return (
    <div>
      <h2>List of Books</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book, i) => {
              const { id, title, author } = book;
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{title}</td>
                  <td>{author}</td>

                  <td>
                    <Link to="/edit-book" state={{ id, title, author }}>
                      <button className="btn btn-primary">Edit</button>
                    </Link>

                    <button
                      className="btn btn-danger"
                      onClick={() => deleteBooks(i)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ViewBook;
