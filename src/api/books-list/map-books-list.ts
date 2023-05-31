import { TBook } from "../../types";
import coverImage from "../../image/cover-book.png";

export const mapBooksList = (data: any): TBook[] => {
  return data.docs.map((book: any) => ({
    id: book.key,
    title: book.title,
    imageLink: getCoverLink(book.cover_edition_key),
    authors: book.author_name,
  }));
};

function getCoverLink(coverId: string): string {
  return coverId
    ? `https://covers.openlibrary.org/b/olid/${coverId}-L.jpg`
    : coverImage;
}
