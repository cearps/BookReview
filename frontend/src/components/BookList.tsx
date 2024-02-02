import { Book } from "../utils/types";

function BookList(books: Book[]) {
  return (
    <>
      <div className="row">
        {books.map((book) => (
          <BookListEntry {...book} />
        ))}
      </div>
    </>
  );
}

function BookListEntry(book: Book) {
  return (
    <>
      <div className="col-6 card">
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <p>{book.rating.grade} ⭐</p>
      </div>
    </>
  );
}

export default BookList;
