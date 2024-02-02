type Book = {
  id: number;
  title: string;
  author: string;
  rating: Rating;
};

type Rating = {
  grade: 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
  review: string;
};

export type { Book, Rating };
