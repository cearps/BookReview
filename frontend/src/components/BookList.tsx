import generateStarDisplay from "../utils/generateStarDisplay";
import { Book } from "../utils/types";

function BookList(books: Book[]) {
  return (
    <>
      <div className="row">
        {books.map((book) => (
          <BookListEntry key={book.id} {...book} />
        ))}
      </div>
    </>
  );
}

function BookListEntry(book: Book) {
  return (
    <>
      <div className="col-4 card">
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <p>{generateStarDisplay(book.rating.grade)}</p>
      </div>
    </>
  );
}

export default BookList;
