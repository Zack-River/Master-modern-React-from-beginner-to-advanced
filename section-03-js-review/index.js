import { getBooks, getBook } from "./script.js";

const book = getBook(1);

// object destructuring
const { title, author, genres, pages, publicationDate } = book;
console.log(title, author, genres); // The Cyberiad Stanislaw Lem [ 'science fiction', 'humor', 'speculative fiction', 'short stories', 'fantasy' ]

// array destructuring with rest operator
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, "\n" , secondaryGenre, "\n", otherGenres); // science fiction humor [ 'speculative fiction', 'short stories', 'fantasy' ]

// spread operator with arrays
const newGenres = [...genres, "epic fantasy"];
console.log(newGenres); // [ 'science fiction', 'humor', 'speculative fiction', 'short stories', 'fantasy', 'epic fantasy' ]

// spread operator with objects
const updatedBook = {
    ...book,
    // add new properties
    moviePublicationDate: 2024,

    // override existing properties
    pages: 1200
}
console.log(updatedBook); // { title: 'The Cyberiad', author: 'Stanislaw Lem', genres: [Array], moviePublicationDate: 2024 }

// template literals

const summary = `
    ${title}, a ${pages}-page long book was written by ${author} and published in ${publicationDate.split("-")[0]}. It has ${genres.length} genres: ${genres.join(", ")}. 
`;
console.log(summary);

// tenary operator
const pagesRange = pages > 1000 ? "more than 1000 pages" : "less than 1000 pages";
console.log(`the book has ${pagesRange} pages`);

// arrow functions
const getSummary = (title, pages, author) => {
    return `${title}, a ${pages}-page long book was written by ${author}`;
}
console.log(getSummary(title, pages, author));

// Short circuiting and logical operators
let defaultAuthor = "Unknown";
let defaultPages = null;

console.log(defaultPages && defaultAuthor);
console.log(defaultPages || defaultAuthor);
console.log(!defaultPages && defaultAuthor);
console.log(!defaultPages || defaultAuthor);
console.log(defaultPages ?? "no pages");

// optional chaining
function printMoviePublicationDate(book) {
    console.log(book?.moviePublicationDate); 
    // return movie publication date only if book exists
}
printMoviePublicationDate(updatedBook);