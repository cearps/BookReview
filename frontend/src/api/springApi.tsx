import exampleBooks from "../examples/ExampleBooks";
import { Book } from "../utils/types";

async function fetchBooks(): Promise<Book[]> {
  // TODO when the backend is ready, replace the URL with the correct one

  // for now we are using a fake API
  return Promise.resolve(exampleBooks);

  const response = await fetch("http://localhost:8080/books");
  const data = await response.json();
  return data;
}

async function fetchBook(id: number): Promise<Book> {
  // TODO when the backend is ready, replace the URL with the correct one

  // for now we are using a fake API
  const book = exampleBooks.find((book) => book.id === id);
  if (!book) {
    throw new Error(`Book with id ${id} not found`);
  }
  return book;

  const response = await fetch(`http://localhost:8080/books/${id}`);
  const data = await response.json();
  return data;
}

async function addBook(book: Book) {
  // TODO when the backend is ready, replace the URL with the correct one

  const response = await fetch("http://localhost:8080/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });
  const data = await response.json();
  return data;
}

export { fetchBooks, fetchBook, addBook };
