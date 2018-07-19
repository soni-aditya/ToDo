document.getElementById('input-place').onkeypress = function (event) {
    if(event.key == "Enter"){
         let inputField = document.getElementById('input-place');
        //getting text from input
        let task = inputField.value;
        //Creating li element
        let li = document.createElement('li');
        // var check = document.creat
        var element = document.createTextNode(task);
        li.appendChild(element);
        //append to ul
        document.getElementById('main-app').appendChild(li);
        //Reset the text in input field
        inputField.value = "";
    }
}