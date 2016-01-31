toDo.controller('toDoController', [function() {
  var self = this;
  self.taskList = [];
  self.editing = false;
  self.editIndex = 0;

  self.addTask = function() {
    self.editing = false;
    self.taskList.splice(self.editIndex, 0, {taskName: self.task, completed: false});
    self.task = '';
    self.editIndex = 0;
  };

  self.completeThat = function(index) {
    self.taskList[index].completed = !self.taskList[index].completed;
  };

  self.editThat = function(index) {
    self.editIndex = index;
    self.editing = !self.editing;
    self.task = self.taskList[index].taskName;
    self.taskList.splice(index, 1);
  };

  self.clearCompleted = function() {
    for (i = 0; i < self.taskList.length; i += 1) {
      if (self.taskList[i].completed === true) {
        self.taskList.splice(i, 1);
        i-=1;
      }
    }
  };

  self.deleteThat = function(index) {
    self.taskList.splice(index, 1);
  };

  self.showCompleted = function() {
    for (i = 0; i < self.taskList.length; i += 1) {
      if (self.taskList[i].completed === false) {
        self.taskList.splice(i, 1);
        i-=1;
      }
    }
  };

}]);
