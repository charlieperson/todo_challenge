describe('To-do list', function() {


  var taskField = element(by.model('toDoCtrl.task'));
  var addTaskButton = $('.addTaskBtn');
  var item = element(by.className('item'));
  var items = element.all(by.className('item'));
  var checkBox = element.all(by.className('checkit'));
  var h4 = element.all(by.css('h4'));
  var editBtn = element.all(by.className('editBtn')).first();
  var clearCompletedBtn = element(by.className('clearComplete'));
  var deleteBtn = element.all(by.className('deleteBtn'));
  var showCompleteBtn = element(by.className('showCompleteBtn'));

  beforeEach (function() {
    browser.get('http://localhost:8080');
  });


  // As a forgetful person
  // I want to store my tasks
  // So that I don't forget them

  it('can add a task as needed', function() {
    taskField.sendKeys('My first task!');
    addTaskButton.click();
    expect(((item)).getText()).toEqual('My first task!');
  });

  // As a person with limited time
  // I want to instantly be able to update my todo list (adding and changing entries)
  // So that I have more time to think about other things

  it('allows a person to edit a task', function() {
    taskField.sendKeys('My first task');
    addTaskButton.click();
    editBtn.click();
    taskField.sendKeys(' edited!');
    addTaskButton.click();
    expect((item).getText()).toEqual('My first task edited!');
  });

  it('puts an edited task back where it was', function() {
    taskField.sendKeys('task 1');
    addTaskButton.click();
    taskField.sendKeys('task 2');
    addTaskButton.click();
    editBtn.click();
    taskField.sendKeys(' edited!');
    addTaskButton.click();
    expect((items.first()).getText()).toEqual('task 2 edited!');
    expect((items.last()).getText()).toEqual('task 1');
  });


  // As a person who actually gets stuff done
  // I want to mark my tasks as done
  // So that I don't do them twice

  it('changes tasks to green when checked off', function() {
    taskField.sendKeys('My first task!');
    addTaskButton.click();
    checkBox.first().click();
    expect(h4.first().getAttribute('class')).toMatch(/completed-true/);
  });

  // As someone who has done lots of stuff
  // I want to be able to clear my completed tasks
  // So I never see them again
  it('allows users to clear all completed tasks', function() {
    taskField.sendKeys('task 1');
    addTaskButton.click();
    taskField.sendKeys('task 2');
    addTaskButton.click();
    checkBox.first().click();
    clearCompletedBtn.click();
    expect(h4.first().getText()).toEqual('task 1');
  });

  // As a person who doesn't like counting by hand
  // I want to see a total number of tasks
  // So that I don't have to count
  it('allows users to clear all completed tasks', function() {
    taskField.sendKeys('task 1');
    addTaskButton.click();
    taskField.sendKeys('task 2');
    addTaskButton.click();
    deleteBtn.first().click();
    expect(h4.first().getText()).toEqual('task 1');
  });

  // As a person with a lot of tasks
  // I want to be able to filter my tasks by "All", "Active", "Complete"
  // So that I only see the relevant tasks
  it('allows users to filter tasks by those that are complete', function() {
    taskField.sendKeys('task 1');
    addTaskButton.click();
    taskField.sendKeys('task 2');
    addTaskButton.click();
    checkBox.first().click();
    showCompleteBtn.click();
    expect(h4.first().getText()).toEqual('task 2');
  });
});
