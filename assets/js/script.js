// var rightNow = new Date(); // don't worry about this "new" keyword yet

// console.log(rightNow); // the result would look like a string...
// console.log(typeof rightNow); // but its data type is an "object"

// var currentTime = moment();
// californiaTime.textContent = currentTime.format('MMM DD, YYYY - hh:mm:ss a')
// newyorkTime.textContent = currentTime.add(3,'hours').format(blah)
// moment().format ("ddd,hA");

// var rightNow = moment().format("MMMM Do, YYYY - hh:mm:ss a");
// console.log(rightNow);

// var tomorrow = moment().add(1, "day").format("dddd, MM-D-YYYY [at] hh:mm:ss A");
// console.log(tomorrow);

// var pastDate = moment("12-01-1999", "MM-DD-YYYY").format("dddd, MM/DD/YY");
// console.log(pastDate);

var formContentEl = document.querySelector('#column')
var taskDataEl = document.querySelectorAll('.textarea')
console.log(taskDataEl)


// current date
var currentDayEl = document.querySelector('#currentDay');
var currentTime = moment();
let currentTimeEl = document.createElement('p');
let containerEl = document.createElement('div');
currentTimeEl.textContent = currentTime.format('dddd, MMM DD ')
currentDayEl.appendChild(containerEl);
containerEl.appendChild(currentTimeEl);



var updateTask= function(event) {
    event.preventDefault();
    var targetEl = event.target;
    console.log("event.target")
   
    for (var i=0;i<taskDataEl.length; i++) {
        var savedTasksArr = []
        savedTasksArr.concat(taskDataEl[i]);
        
         localStorage.setItem("tasks", JSON.stringify(savedTasksArr));
        
    }
    
}


var loadTasks = function() {
    var savedTasks = localStorage.getItem("tasks");
}

loadTasks();



// var saveTasks = function() {
//     // localStorage can only store strings . stringfy convers other type of date into strings
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// var loadTasks = function() {
//     var savedTasks = localStorage.getItem("tasks");
  
//     if (!savedTasks) {
//       return false;
//     }
  
//     savedTasks = JSON.parse(savedTasks);
//     // loop through savedTasks array
//     for (var i = 0; i < savedTasks.length; i++) {
//     // pass each task object into the `createTaskEl()` function
//         createTaskEl(savedTasks[i]);
//     }
// }

// var taskDataArr = taskDataEl;
// console.log(taskDataArr)

// var taskDataObj = {
//     text: taskDataEl,
//     status: momentCheck, 
// }
 
    // console.log(time)
var MomentCheck = function() {
    var time= moment().hour();
    console.log(time)
//    var time = moment(currentTime, "L").set("hour", 17);
   console.log(time)
    if (moment().isAfter(time)) {
        $(taskDataEl).addClass("past");
      } else if (Math.abs(moment().diff(time, "hours")) <= 1) {
        $(taskDataEl).addClass("present");
      }
}

MomentCheck();

formContentEl.addEventListener('click',updateTask)

// var auditTask = function(taskEl) {
//     // get date from task element
//     var date = $(taskEl)
//       .find("span")
//       .text()
//       .trim();
  
//     // convert to moment object at 5:00pm
//     var time = moment(date, "L").set("hour", 17);
  
//     // remove any old classes from element
//     $(taskEl).removeClass("list-group-item-warning list-group-item-danger");
  
//     // apply new class if task is near/over due date
//     if (moment().isAfter(time)) {
//       $(taskEl).addClass("list-group-item-danger");
//     } else if (Math.abs(moment().diff(time, "days")) <= 2) {
//       $(taskEl).addClass("list-group-item-warning");
//     }
//   };



// var testEl = $('.lead').click(function(){
    
// })
