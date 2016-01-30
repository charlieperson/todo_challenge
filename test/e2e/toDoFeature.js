describe('To-do list', function() {

  var taskField = element(by.model('toDoCtrl.task'));
  var addTaskButton = $('.addTaskBtn');
  var list = $('.list');

  it('has a title', function() {
    browser.get('http://localhost:8080');
    expect(browser.getTitle()).toEqual('To-do list');
  });

  it('initialises with no items in the to-do list', function() {
    expect((list).getText()).toEqual('');
  });

  it('can add a task as needed', function() {
    taskField.sendKeys('My first task!');
    addTaskButton.click();
    expect((list).getText()).toEqual('My first task!');
  });

});
