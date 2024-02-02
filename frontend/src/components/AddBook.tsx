import { useState } from "react";
import generateStarDisplay from "../utils/generateStarDisplay";

function AddBook() {
  const [showBookForm, setShowBookForm] = useState(false);

  function showAddBookForm() {
    setShowBookForm(!showBookForm);
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-dark my-3"
        onClick={showAddBookForm}
      >
        {!showBookForm ? "Add Book" : "Hide Form"}
      </button>
      {showBookForm && <AddBookForm />}
    </>
  );
}

function AddBookForm() {
  const [starRating, setStarRating] = useState(3);

  function updateStarDisplay(stars: number) {
    setStarRating(stars);
  }
  return (
    <div id="addBookForm" className="bg-dark-subtle rounded p-2">
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter title"
        />
      </div>
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          className="form-control"
          id="author"
          placeholder="Enter author"
        />
      </div>
      <div className="form-group">
        <label htmlFor="range">Star rating: </label>
        <br />
        <div id="starRating">{generateStarDisplay(starRating)}</div>
        <input
          type="range"
          className="form-range"
          min="0"
          max="5"
          step="0.5"
          defaultValue="3"
          id="rating"
          onChange={(e) => updateStarDisplay(parseFloat(e.target.value))}
        />
      </div>
      <div className="form-group">
        <label htmlFor="review">Review</label>
        <textarea
          className="form-control"
          id="review"
          rows={3}
          placeholder="Enter review"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary my-3">
        Submit
      </button>
    </div>
  );
}

export default AddBook;
