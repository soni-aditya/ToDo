let store = new ToDoApp();

$(document).ready(function() {
  $("#input-place").keypress(function(e) {
    if (e.key == "Enter") {
      let content = $("#input-place");
      store.addItem(content[0].value);
      content[0].value = "";
      reRender();
    }
  });
});
function reRender() {
  $("#main-app")[0].innerHTML = "";
  render();
}
function countTotalElements() {
  let totalElements = store.ToDoCollection.length;
  if (totalElements) {
    $("#total").html(totalElements + " tasks left");
  } else {
    $("#total").html("");
  }
}
function render() {
  let list = store.ToDoCollection;
  for (let index in list) {
    const ul = $("#main-app")[0];
    // console.log(ul);
    let li = $("<li class = 'input-field'></li>");
    // //
    let labelCheck = $("<label class='checkContainer'></label>");
    let check = $("<input type='checkbox' class='list-check'/>>");
    let checkSpan = $("<span class='checkmark'></span>");
    labelCheck.append(check, checkSpan);
    //
    let text = $("<span></span>");
    text.html(list[index].caption);
    text.attr("contentEditable", true);
    //
    let cross = $("<button class='remove-todo'></button>");
    let icon = $("<i class='fas fa-times-circle'></i>");
    cross.append(icon);
    //
    //Adding the text-decoration according to checkbox
    if (list[index].isCompleted) {
      text.css("text-decoration", "line-through");
      check.attr("checked", "checked");
    }
    //
    $(li).append(labelCheck);
    $(li).append(text);
    li.append(cross);
    //
    $(ul).append(li);
    //
    cross.click(function() {
      store.removeItem(index);
      reRender();
    });
    //
    check.click(function() {
      store.ToDoCollection[index].toggle();
      reRender();
    });
  }
  //Show the total no. of li elements
  countTotalElements();
}
function showAll() {
  let all = $("li");
  for (var i = 0; i < all.length; i++) {
    $(all[i]).show();
  }
}
function showCompleted() {
  let all = $("li");
  for (var i = 0; i < all.length; i++) {
    let check_status = all[i].childNodes[0].childNodes[0].checked;
    if (!check_status) {
      $(all[i]).hide();
    } else {
      $(all[i]).show();
    }
  }
}
function showActive() {
  let all = $("li");
  for (var i = 0; i < all.length; i++) {
    let check_status = all[i].childNodes[0].childNodes[0].checked;
    if (!check_status) {
      $(all[i]).show();
    } else {
      $(all[i]).hide();
    }
  }
}
