import Swal from "sweetalert2";
import { deleteBook } from "../../Redux/slice/bookSlice";
import store from './../../Redux/store/store';

const deleteBooks = (i) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#239034",
    cancelButtonColor: "#F42929",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      store.dispatch(deleteBook(i));
    }
  });
};

export default deleteBooks;
