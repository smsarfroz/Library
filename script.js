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

where's the dialog  ? it's not even showing up
for `read`, I want a radio button 

Now, I have to define onclick function for add and close in dialog box ? 
how to do that ? 
How do I access the information that is input into the dialog form ? 
How do I add remove button to a bookDiv ? 
and an event of when it's clicked, this div will get deleted.

ToggleRead is like a child of bookDiv,
when ToggleRead is clicked Read status of bookDiv changes to it's opposite.
how to do that ? 
what was the prototype lesson all about ? 
why do we even require prototype ? 
can we do without it ? how will you do it.

I already have those functions, how to use them
But if I am pushing the new book object into array then how will I display them ? 
do I have to iterate through the array ? 
or just access the last element in the array ? 

we want the toggle read button on bookDiv to work, right ? 
how will that be possible ? 


Book.prototype.toggle_read = function() {
    if(this.read === "Read") {
        this.read = "Not Read";
    }else{
        this.read = "Read";
    }
}

bookObject.toggle_read();
and then what ? 
what else do I need here ? 
How to update the display ? 
why do we even require prototype here ? remind me again 
but we haven't even created book object from Book function 
what am I missing 

*/

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

    /* 
    here, what should I do ? 
    should I create a new book through the function ? and add it to the array ? 
    in this function we just have to show the book details in the div that we have inserted 
    so push the book object into array
    and access the last element in array 
    Don't I have to add <p> blocks in the bookDiv then ? 
    how will you show book details ?      

    is there a way by which I could display all the book details by inserting it once ? 
    like I create a <p> and insert entire book object in it ? then what will happen ? 

    what's wrong with directly changing the value of obj book ? 

    obj.read = "Not Read" -> what's wrong in this ? 

    in each button add an integer. like button{i}
    when a button_i is clicked we know the index, so we know the book number in the myLibrary array 

    makes changes in that objects and 
    then update the <p> or anything that contains this text of read status in bookDiv display section.
    
    and then what ? 

    also, in the form section we can create new instance of book object i
    and while trying display details in bookDiv div, we can use this book object i directly instead of calling 
    query selector again and again for separate details. 

    and then what ? 

    but then if you remove a book div by clicking remove button. mylibrary array is still the same, tho
    how to care of that ? 
    indexes will then also get mismatched.
    no, it will not. because button_i and mylibrary_i will always match even after removing some book div. why ? 
    i always increases.
    I don't require index ? 
    I wanted to store the index with each toggle read button, so that I when the button is clicked 
    I would loop that object up in the array and if I want to update some property in it then I will do so. 
    
    But how do you even get the index out of the variable name of the button ? 
    like var3 - how will you extract 3 from here ? 

    so, if a button is clicked how do I know which div is it ? is there a different method to do so ? 
    create a book object here, how ? 
    */
    addButton.addEventListener('click', () => {
        index++;

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

/* 
what's wrong here ? I can't seem to find out 
in toggleRead button click event , I retrieved the element with id Read
and checked it's value.
But apparently, it's not doing anything with it. is it a deadend ? 

how to do through prototype 
what things can we do through prototype ? 
how to get the prototype of a function ? 

but isn't this applied to functions ? 
parent of button is a div 
then would we select the toggleRead function ? 
what's the prototype of toggleRead ? 
we can also change the prototype of an object and set it something.
how to create Book prototype function ? 

we were required to use function Book to create new book objects whenever new book button is clicked. 

*/