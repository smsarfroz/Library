/*
how to create the constructor ? 
what details does a book object have ? 
number of pages, read or not 
manually add a few book in the array 
How will you insert a book in the final version ? 
through dom prolly 
Now, iterate through array and display them.
in what ? 
create a div. inside this div, insert text details 
But then how will new card restructure itself ? and how will it align ?
will it just align right next to the previous one and to new line if current row
completes ? 
well, let's just check that out manually.
*/

const myLibrary = [];

function Book(title, numberOfPages, read) {
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.read = read; 
}

function addBookToLibrary(title, numberOfPages, read) {
    const newBook = new Book(title, numberOfPages, read);
    myLibrary.push(newBook);
}

addBookToLibrary("Alchemist", 134, true);

console.log(myLibrary);

console.log(myLibrary[0]);

