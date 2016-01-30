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

  it('changes inEditMode to true when showEditInput() is called', function() {
    ctrl.task = 'This is my first task!';
    ctrl.addTask();
    ctrl.showEditInput();
    expect(ctrl.isInEditMode()).toReturn('true');
  });
});
