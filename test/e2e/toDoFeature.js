describe('To-do list', function() {


  var taskField = element(by.model('toDoCtrl.task'));
  var addTaskButton = $('.addTaskBtn');
  var items = $('.items');
  var editBtn = $('.editBtn');
  var editInput = $('.editInput');

  beforeEach (function() {
    browser.get('http://localhost:8080');
  });


  // As a forgetful person
  // I want to store my tasks
  // So that I don't forget them

  it('can add a task as needed', function() {
    taskField.sendKeys('My first task!');
    addTaskButton.click();
    expect(($('.items')).getText()).toEqual('My first task!');
  });

  // As a person with limited time
  // I want to instantly be able to update my todo list (adding and changing entries)
  // So that I have more time to think about other things

  it('allows a person to edit a task', function() {
    taskField.sendKeys('My first task!');
    addTaskButton.click();
    editBtn.click();
    editInput.sendKeys('My first task edited!');
    expect((items).getText()).toEqual('My first task edited!');
  });


  // As a person who actually gets stuff done
  // I want to mark my tasks as done
  // So that I don't do them twice
  // it('changes tasks to completed when checked off', function() {
  //   taskField.sendKeys('My first task!');
  //   addTaskButton.click();
  //   expect($('.completed-true')).to bePresent;
  // });


});
