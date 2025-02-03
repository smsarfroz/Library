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
        author.textContent = `By ${authorInput.value}`; 
        bookDiv.appendChild(author);

        const pages = document.createElement("p");
        const pagesInput = document.getElementById("Pages");
        pages.textContent = `${pagesInput.value} pages`;
        bookDiv.appendChild(pages);

        const read = document.createElement("p");
        const readInput = document.getElementById("Read");
        let readStatus = "Read";
        if(readInput.checked) {
            read.textContent = "Read";
        }else{
            read.textContent = "Not read";
            readStatus = "Not read";
        }
        bookDiv.appendChild(read);


        let newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, readStatus);
        console.log(newBook);
        Book.prototype.toggle_read = function() {
            if(this.read === "Read") {
                this.read = "Not Read";
            }else{
                this.read ="Read";
            }
        }

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        bookDiv.appendChild(removeButton);

        const toggleRead = document.createElement("button");
        toggleRead.textContent = "Toggle Read";
        bookDiv.appendChild(toggleRead);

        removeButton.addEventListener('click', ()=> {
            bookDiv.remove();
        });

        toggleRead.addEventListener('click', ()=> {
            console.log("toggle read button clicked");

            newBook.toggle_read();
            read.textContent = newBook.read;
        });
        dialog.close();
    });
    closeButton.addEventListener('click', () => {
        console.log("close button clicked");
        dialog.close();
    });
});

