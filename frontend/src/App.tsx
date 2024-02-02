import "./assets/App.css";
import BookList from "./components/BookList";
import { Book } from "./utils/types";

const exampleBooks: Book[] = [
  {
    id: 1,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt and David Thomas",
    rating: {
      grade: 5,
      review: "A must-read",
    },
  },
  {
    id: 2,
    title: "Clean Code",
    author: "Robert C. Martin",
    rating: {
      grade: 4.5,
      review: "Great book",
    },
  },
  {
    id: 3,
    title: "Refactoring",
    author: "Martin Fowler",
    rating: {
      grade: 4,
      review: "Good book",
    },
  },
];

function App() {
  return (
    <div className="container">
      <h1>Book List</h1>
      {BookList(exampleBooks)}
    </div>
  );
}

export default App;
