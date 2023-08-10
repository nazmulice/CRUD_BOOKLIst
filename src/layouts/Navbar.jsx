import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/show-book" className="nav-link">
        Show Book
      </Link>
      <Link to="/add-book" className="nav-link">
        AddBook
      </Link>
    </nav>
  );
};

export default Navbar;
