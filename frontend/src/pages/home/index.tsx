import BookList from "../../components/BookList";
import AddBook from "../../components/AddBook";
import exampleBooks from "../../examples/ExampleBooks";

function Home() {
  return (
    <div className="container">
      <h1>Home</h1>
      {BookList(exampleBooks)}
      <AddBook />
    </div>
  );
}

export default Home;
