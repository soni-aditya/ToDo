document.getElementById("input-place").onkeypress = function(event) {
    if (event.key == "Enter") {
        const ul = document.getElementById("main-app");
        let inputField = document.getElementById("input-place");
        //getting text from input
        let task = inputField.value;
        //Creating li element
        let li = document.createElement("li");
        //Creating the building blocks of li
        let check = document.createElement("input");
        check.type = "checkbox";
        check.classList.add("list-check");

        let text = document.createElement("span");
        text.innerText = task;

        let cross = document.createElement("button");
        cross.classList.add("remove-todo");
        cross.innerText = "Delete";

        let edit = document.createElement("button");
        edit.classList.add("edit-todo");
        edit.innerHTML = "Edit";

        li.classList.add("input-field");
        li.appendChild(check);
        li.appendChild(text);
        li.appendChild(cross);
        li.appendChild(edit);
        //append to ul
        ul.appendChild(li);
        //Reset the text in input field
        inputField.value = "";
        //Applying the onclick listener onto the checkbox to change the decoration of the note text
        check.onclick = function() {
            if (check.checked) {
                text.style.textDecoration = "line-through";
            } else {
                text.style.textDecoration = "none";
            }
        };
        //Remove the note if delete/cross is pressed
        cross.onclick = function() {
            ul.removeChild(li);
        };
        //Edit the note if edit button is pressed
        applyEdit();
        function applyEdit() {
            edit.onclick = function(e) {
                let content = text.innerHTML;
                //Create an input element on the fly
                let newInnerHtml =
                    '<input type="text" id="temp-text' +
                    '" value="' +
                    content +
                    '" placeholder="enter new content">';

                text.innerHTML = newInnerHtml;

                //Change the text on the button
                e.target.innerHTML = "Save";
                //when save is clicked, content is saved
                e.target.onclick = function() {
                    content = document.getElementById("temp-text").value;
                    text.innerHTML = content;
                    e.target.innerHTML = "Edit";
                    applyEdit();
                };
            };
        }
    }
};
