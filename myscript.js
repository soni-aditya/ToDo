let count = 0;
document.getElementById("input-place").onkeypress = function(event) {
  if (event.key == "Enter") {
    const ul = document.getElementById("main-app");
    let inputField = document.getElementById("input-place");
    //getting text from input
    let task = inputField.value;
    //Creating li element
    let li = document.createElement("li");
    //Creating the building blocks of li
    let labelCheck = document.createElement("label");
    labelCheck.classList = "checkContainer";

    let check = document.createElement("input");
    check.type = "checkbox";
    check.classList.add("list-check");

    let checkSpan = document.createElement("span");
    checkSpan.classList = "checkmark";

    labelCheck.appendChild(check);
    labelCheck.appendChild(checkSpan);

    let text = document.createElement("span");
    text.innerText = task;

    let cross = document.createElement("button");
    cross.classList.add("remove-todo");
    cross.innerHTML = '<i class="fas fa-times-circle"></i>';

    let edit = document.createElement("button");
    edit.classList.add("edit-todo");
    edit.innerHTML = '<i class="fas fa-edit"></i>';

    li.classList.add("input-field");
    // li.appendChild(checkLabel);
    li.appendChild(labelCheck);
    li.appendChild(text);
    li.appendChild(cross);
    li.appendChild(edit);
    //append to ul
    ul.appendChild(li);
    countTotal();
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
      countTotal();
    };
    //Edit the note if edit button is pressed
    text.contentEditable = true;
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
        emptyChild();
        edit.innerHTML = '<i class="fas fa-save"></i>';
        //when save is clicked, content is saved
        edit.onclick = function() {
          content = document.getElementById("temp-text").value;
          text.innerHTML = content;
          emptyChild();
          edit.innerHTML = '<i class="fas fa-edit"></i>';
          applyEdit();
        };

        function emptyChild() {
          while (edit.firstChild) {
            console.log("Inside");
            edit.removeChild(edit.firstChild);
          }
        }
      };
    }
  }
};
function countTotal() {
  let total = document.getElementsByTagName("li").length;
  document.getElementById("total").innerHTML = total + " items left";
  //If total length is 0 than hide the footer
  //If its more than zero than show it
  // console.log(total);
  if (total != 0) {
    document.getElementsByClassName("foot")[0].style.display = "flex";
  } else {
    document.getElementsByClassName("foot")[0].style.display = "none";
  }
}
function showAll() {
  let all = document.getElementsByTagName("li");
  for (var i = 0; i < all.length; i++) {
    all[i].style.display = "flex";
  }
}
function showCompleted() {
  let all = document.getElementsByTagName("li");
  for (var i = 0; i < all.length; i++) {
    let check_status = all[i].childNodes[0].childNodes[0].checked;
    if (!check_status) {
      all[i].style.display = "none";
    }
    else{
        all[i].style.display = "flex";
    }
  }
}
function showActive() {
  let all = document.getElementsByTagName("li");
  for (var i = 0; i < all.length; i++) {
    let check_status = all[i].childNodes[0].childNodes[0].checked;
      if (!check_status) {
          all[i].style.display = "flex";
      }
      else{
          all[i].style.display = "none";
      }
  }
}
