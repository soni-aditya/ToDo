let store = new ToDoApp();

document.getElementById("input-place").onkeypress = function(event) {
  if (event.key == "Enter") {
    let content = document.getElementById("input-place");
    store.addItem(content.value);
    content.value = "";
    reRender();
  }
};
function reRender() {
  document.getElementById("main-app").innerHTML = "";
  render();
}
function countTotalElements() {
  let totalElements = store.ToDoCollection.length;
  if (totalElements) {
    document.getElementById("total").innerHTML = totalElements + " tasks";
  } else {
    document.getElementById("total").innerHTML = "";
  }
}
function render() {
  let list = store.ToDoCollection;
  for (let index in list) {
    const ul = document.getElementById("main-app");
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
    text.innerText = list[index].caption;

    let cross = document.createElement("button");
    cross.classList.add("remove-todo");
    cross.innerHTML = '<i class="fas fa-times-circle"></i>';

    //Adding the text-decoration according to checkbox
    if (list[index].isCompleted) {
      text.style.textDecoration = "line-through";
      check.checked = "checked";
    }
    //finalizing the li
    li.classList.add("input-field");
    li.appendChild(labelCheck);
    li.appendChild(text);
    li.appendChild(cross);
    //append to ul
    ul.appendChild(li);
    text.contentEditable = true;

    cross.onclick = function() {
      store.removeItem(index);
    };
    check.onclick = function() {
      store.ToDoCollection[index].toggle();
      reRender();
    };
  }
  //Show the total no. of li elements
  countTotalElements();
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
    } else {
      all[i].style.display = "flex";
    }
  }
}
function showActive() {
  let all = document.getElementsByTagName("li");
  for (var i = 0; i < all.length; i++) {
    let check_status = all[i].childNodes[0].childNodes[0].checked;
    if (check_status) {
      all[i].style.display = "none";
    } else {
      all[i].style.display = "flex";
    }
  }
}
