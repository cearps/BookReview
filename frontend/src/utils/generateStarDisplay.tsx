function generateStarDisplay(starCount: number) {
  return (
    <>
      {fullStars(starCount) > 0 &&
        [...Array(fullStars(starCount))].map((_, index) => (
          <i key={index} className="bi bi-star-fill"></i>
        ))}
      {halfStar(starCount) === 1 && <i className="bi bi-star-half"></i>}
      {emptyStars(starCount) > 0 &&
        [...Array(emptyStars(starCount))].map((_, index) => (
          <i key={index} className="bi bi-star"></i>
        ))}
    </>
  );
}

function fullStars(starCount: number) {
  return Math.floor(starCount);
}

function halfStar(starCount: number) {
  return starCount - fullStars(starCount) >= 0.5 ? 1 : 0;
}

function emptyStars(starCount: number) {
  return 5 - fullStars(starCount) - halfStar(starCount);
}

export default generateStarDisplay;
