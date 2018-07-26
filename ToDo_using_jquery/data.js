function ToDoItem() {
  this.caption = "";
  this.isCompleted = false;
  this.toggle = function() {
    this.isCompleted = !this.isCompleted;
  };
}
function ToDoApp() {
  this.ToDoCollection = [];
  this.addItem = function(cap) {
    let item = new ToDoItem();
    item.caption = cap;
    this.ToDoCollection.push(item);
  };
  this.removeItem = function(index) {
    this.ToDoCollection.splice(index, 1);
    reRender();
  };
}
