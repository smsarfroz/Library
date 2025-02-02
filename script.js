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
Why is this bookDiv not showing up ? not even in html file in developer tools?
add onclick function on button that brings up a form
Do I have to add a div inside this popup ? 
well how to get a popup first of all ? inside this popup
will be our form, right. and then what ? 
use dialog , do I insert it through dom ? 
inside this dialog resides our form 

where's the dialog, bro  ? it's not even showing up
for `read`, I want a radio button 

Now, I have to define onclick function for add and close in dialog box ? 
how to do that ? 
How do I access the information that is input into the dialog form ? 

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
addBookToLibrary("Thus Spoke Zarathustra", 523, false);
addBookToLibrary("Thus Spoke Zarathustra", 523, false);
addBookToLibrary("Thus Spoke Zarathustra", 523, false);
addBookToLibrary("Thus Spoke Zarathustra", 523, false);
addBookToLibrary("Thus Spoke Zarathustra", 523, false);
addBookToLibrary("Thus Spoke Zarathustra", 523, false);

console.log(myLibrary);

console.log(myLibrary[0]);
console.log(myLibrary[1]);

const container = document.querySelector(".container");

console.log(myLibrary.length);

/*
for (let i = 0; i < myLibrary.length; ++i) {

    console.log(i, myLibrary[i]);
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    container.appendChild(bookDiv);

    const name = document.createElement("p");
    name.textContent = `${myLibrary[i].title}`;
    name.style.cssText = "font-weight: bold; font-size: 20";
    bookDiv.appendChild(name);

    const pages = document.createElement("p");
    pages.textContent = `${myLibrary[i].numberOfPages}`;
    bookDiv.appendChild(pages);

    const read = document.createElement("p");
    read.textContent = `${myLibrary[i].read}`;
    bookDiv.appendChild(read);
}
*/

const button = document.querySelector("#btn");

button.addEventListener('click', () => {
    console.log("button clicked!");

    const dialog = document.createElement("dialog");
    dialog.open = "true";
    container.appendChild(dialog);

    {
        const form = document.createElement("form");
        form.action = "#";
        form.method = "POST";
        dialog.appendChild(form);

        const label = document.createElement("label");
        label.for = "Title";
        label.textContent = "Title";
        const input = document.createElement("input");
        input.type = "text";
        input.name = "Title";
        input.id = "Title";

        form.appendChild(label);
        form.appendChild(input);

    }

    {
        const form = document.createElement("form");
        form.action = "#";
        form.method = "POST";
        dialog.appendChild(form);

        const label = document.createElement("label");
        label.for = "Author";
        label.textContent = "Author";
        const input = document.createElement("input");
        input.type = "text";
        input.name = "Author";
        input.id = "Author";

        form.appendChild(label);
        form.appendChild(input);

    }
    {
        const form = document.createElement("form");
        form.action = "#";
        form.method = "POST";
        dialog.appendChild(form);

        const label = document.createElement("label");
        label.for = "Pages";
        label.textContent = "Pages";
        const input = document.createElement("input");
        input.type = "number";
        input.name = "Pages";
        input.id = "Pages";

        form.appendChild(label);
        form.appendChild(input);

    }
    {
        const form = document.createElement("form");
        form.action = "#";
        form.method = "POST";
        dialog.appendChild(form);

        const label = document.createElement("label");
        label.for = "Read";
        label.textContent = "Read";
        const input = document.createElement("input");
        input.type = "checkbox";
        input.name = "Read";
        input.id = "Read";

        form.appendChild(label);
        form.appendChild(input);

    }

    const addButton = document.createElement("button");
    const closeButton = document.createElement("button");
    addButton.textContent = "Add Book";
    closeButton.textContent = "Close";

    dialog.appendChild(addButton);
    dialog.appendChild(closeButton);

    addButton.addEventListener('click', () => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        container.appendChild(bookDiv);

        const title = document.createElement("p");
        const titleInput = document.getElementById("Title");
        title.textContent = titleInput.value;
        title.style.cssText = "font-weight: bold; font-size: 20px" ;
        bookDiv.appendChild(title);

        const author = document.createElement("p");
        const authorInput = document.getElementById("Author");
        author.textContent = authorInput.value; 
        bookDiv.appendChild(author);

        const pages = document.createElement("p");
        const pagesInput = document.getElementById("Pages");
        pages.textContent = `${pagesInput.value} pages`;
        bookDiv.appendChild(pages);

        const read = document.createElement("p");
        const readInput = document.getElementById("Read");
        if(readInput.checked) {
            read.textContent = "Read";
        }else{
            read.textContent = "Not read";
        }
        bookDiv.appendChild(read);
    });
    closeButton.addEventListener('click', () => {
        console.log("close button clicked");
        dialog.close();
    });
});