import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import ErrorPage from "../pages/Error";
import Home from "../pages/Home";
import Navbar from "../layouts/Navbar";
import ViewBook from "../features/books/ViewBook";
import AddBook from "../features/books/AddBook";
import EditBook from "../features/books/EditBook";
import Footer from './../layouts/Footer';

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show-book" element={<ViewBook />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/edit-book" element={<EditBook />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <footer><Footer/></footer>
    </BrowserRouter>
  );
};

export default Index;
