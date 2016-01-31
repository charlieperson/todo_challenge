describe('toDo', function() {
  beforeEach(module('toDo'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('toDoController');
  }));

  it('initialises with an no tasks defined', function() {
    expect(ctrl.task).toBeUndefined();
  });

  it('changes the ctrl tasks property to the added task', function() {
    ctrl.task = 'This is my first task!';
    ctrl.addTask();
    expect(ctrl.taskList[0].taskName).toEqual('This is my first task!')
  });

  it('changes the editing property when a task being edited', function() {
    ctrl.task = 'This is my first task!';
    ctrl.addTask();
    ctrl.editThat(0);
    expect(ctrl.editing).toEqual(true);
  });

  it('item is deleted upon editing', function() {
    ctrl.task = 'This is my first task!';
    ctrl.addTask();
    ctrl.editThat(0);
    expect(ctrl.taskList[0]).toBeUndefined;
  });

  it('a tasks completed property is changed to true upon completion', function() {
    ctrl.task = 'This is my first task!';
    ctrl.addTask();
    ctrl.completeThat(0);
    expect(ctrl.taskList[0].completed).toEqual(true);
  })

  it('it clears any completed tasks from the taskList when clearCompleted() is called', function() {
    ctrl.task = 'Completed task!';
    ctrl.addTask();
    ctrl.completeThat(0);
    ctrl.task = 'Incomplete task!';
    ctrl.addTask();
    ctrl.clearCompleted();
    expect(ctrl.taskList.length).toEqual(1);
  });

  it('splices ', function() {
    ctrl.task = 'task 1';
    ctrl.addTask();
    ctrl.deleteThat(0);
    expect(ctrl.taskList).toEqual([]);
  });
});
