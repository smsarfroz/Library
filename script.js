
const myLibrary = [];

function Book(title, author, numberOfPages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
}

function addBookToLibrary(title, author, numberOfPages, read) {
    const newBook = new Book(title, author, numberOfPages, read);
    myLibrary.push(newBook);
}

const container = document.querySelector(".container");

const button = document.querySelector("#btn");

const dialog = document.createElement("dialog");
container.appendChild(dialog);

//Title
const form = document.createElement("form");
form.action = "#";
form.method = "POST";
dialog.appendChild(form);

const label1 = document.createElement("label");
label1.for = "Title";
label1.textContent = "Title";
const input1 = document.createElement("input");
input1.type = "text";
input1.name = "Title";
input1.id = "Title";

form.appendChild(label1);
form.appendChild(input1);



//Author

const label2 = document.createElement("label");
label2.for = "Author";
label2.textContent = "Author";
const input2 = document.createElement("input");
input2.type = "text";
input2.name = "Author";
input2.id = "Author";

form.appendChild(label2);
form.appendChild(input2);

//Pages

const label3 = document.createElement("label");
label3.for = "Pages";
label3.textContent = "Pages";
const input3 = document.createElement("input");
input3.type = "number";
input3.name = "Pages";
input3.id = "Pages";

form.appendChild(label3);
form.appendChild(input3);

//Read

const label4 = document.createElement("label");
label4.for = "Read";
label4.textContent = "Read";
const input4 = document.createElement("input");
input4.type = "checkbox";
input4.name = "Read";
input4.id = "Read";

form.appendChild(label4);
form.appendChild(input4);



const addButton = document.createElement("button");
const closeButton = document.createElement("button");
addButton.textContent = "Add Book";
closeButton.textContent = "Close";

dialog.appendChild(addButton);
dialog.appendChild(closeButton);


button.addEventListener('click', () => {
    console.log("button clicked!");

    input1.value = "";
    input2.value = "";
    input3.value = "";
    input4.checked = false;

    dialog.showModal();

});


addButton.addEventListener('click', (event) => {
    event.preventDefault();
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    container.appendChild(bookDiv);

    //title
    const title = document.createElement("p");
    title.textContent = input1.value;
    title.style.cssText = "font-weight: bold; font-size: 20px";
    bookDiv.appendChild(title);

    //author
    const author = document.createElement("p");
    author.textContent = `By ${input2.value}`;
    bookDiv.appendChild(author);

    //pages
    const pages = document.createElement("p");
    pages.textContent = `${input3.value} pages`;
    bookDiv.appendChild(pages);

    //read
    const read = document.createElement("p");
    //what is this code for ? 
    let readStatus = "Read";
    if (input4.checked) {
        read.textContent = "Read";
    } else {
        read.textContent = "Not read";
        readStatus = "Not read";
    }
    // read.textContent = input4.value;
    bookDiv.appendChild(read);

    let newBook = new Book(input1.value, input2.value, input3.value, readStatus);
    console.log(newBook);
    Book.prototype.toggle_read = function () {
        if (this.read === "Read") {
            this.read = "Not Read";
        } else {
            this.read = "Read";
        }
    }
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    bookDiv.appendChild(removeButton);
    const toggleRead = document.createElement("button");
    toggleRead.textContent = "Toggle Read";
    bookDiv.appendChild(toggleRead);
    removeButton.addEventListener('click', () => {
        bookDiv.remove();
    });
    toggleRead.addEventListener('click', () => {
        console.log("toggle read button clicked");
        newBook.toggle_read();
        read.textContent = newBook.read;
    });

    
    dialog.close();
});

closeButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("close button clicked");
    dialog.close();
});














