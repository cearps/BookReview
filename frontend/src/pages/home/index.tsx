import BookList from "../../components/BookList";
import AddBook from "../../components/AddBook";
import { fetchBooks } from "../../api/springApi";
import { useState, useEffect } from "react";
import { Book } from "../../utils/types";

function Home() {
  const [data, setData] = useState<Book[]>([]);

  useEffect(() => {
    fetchBooks().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div className="container">
      <h1>Home</h1>
      {data.length > 0 && BookList(data)}
      <AddBook />
    </div>
  );
}

export default Home;
