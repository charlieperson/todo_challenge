toDo.controller('toDoController', [function() {
  var self = this;
  self.taskList = [];

  self.addTask = function() {
    self.taskList.push({taskName: self.task, completed: false, editMode: false});
  };

  self.completeThat = function(index) {
    self.taskList[index].completed = !self.taskList[index].completed;
  };

  self.showEditInput = function(index) {
    self.taskList[index].editMode = !self.taskList[index].editMode;
  };

  self.isInEditMode = function(index) {
    return self.taskList[index].editMode;
  };

  self.editThat = function(index) {
    self.taskList[index] = self.editedTask;
    self.editedTask = '';
  };

}]);
