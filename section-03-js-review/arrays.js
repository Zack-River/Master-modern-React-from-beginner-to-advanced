import { getBooks } from "./script.js";

const books = getBooks();

// immutable array mapping
const nums = [1, 2, 3, 4, 5];

// map
const squares = nums.map(num => num * num);
console.log(squares);

const titles = books.map(book => book.title);
console.log(titles);

const authors = books.map(book => book.author)
console.log(authors);
const essentailData= books.map(book => {
    return {
        title: book.title,
        author: book.author,
    };
});
console.log(essentailData);

// immutable array filtering

const longBooksWithMovieAdaptation = books.filter(book => book.pages > 500).filter(book => book.hasMovieAdaptation).map(book => book.title);
console.log(`Books that is less than 500 pages and has movie adaptation:
    ${longBooksWithMovieAdaptation.join(" - ")}`);

const adventureBooks = books.filter(book => book.genres.includes("adventure")).map(book => book.title);
console.log(`
    Adventure books: 
    ${adventureBooks.join(" - ")}`);

// immutable array reduction
// reduce(callback, initialValue)
const totalPages = books.reduce((total, book) => total + book.pages, 0);
console.log(totalPages); // all pages needed to read all books

// mutable array sorting
console.log("mutable array sorting");
const x = [3,7,1,9,6];
const sortedX = x.sort((a,b)=> a-b);
console.log("sortedX: ", sortedX);
console.log("x: ", x);

// immutable array sorting
console.log("immutable array sorting");
const y = [3,7,1,9,6];
const sortedY = y.slice().sort((a,b)=> a-b);
console.log("sortedY: ", sortedY);
console.log("y: ", y);


// immutable array operations
// add element
const nums1 = [1,2,3];
const newNum = 4;
const nums2 = [...nums1,newNum];
console.log("old nums1: ",nums1);
console.log("new nums2: ",nums2);

// remove element
const nums3 = [1,2,3,4,5];
const nums4 = nums3.filter(num => num !== 3);
console.log("old nums3: ",nums3);
console.log("new nums4: ",nums4);

// update element
const nums5 = [1,2,3,4,5];
const nums6 = nums5.map(num => num === 3 ? 10 : num);
console.log("old nums5: ",nums5);
console.log("new nums6: ",nums6);