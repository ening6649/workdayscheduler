
var formContentEl = document.querySelector('#column')
var taskDataEl = document.querySelectorAll('.textarea')
// console.log(taskDataEl)

// taskDataEl.forEach(textarea => {
//     console.log(textarea);
//   })
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
   var savedTasksArr = []
    for (var i=0;i<taskDataEl.length; i++) {
        savedTasksArr.push(taskDataEl[i].value);
        
    }
    localStorage.setItem("tasks", JSON.stringify(savedTasksArr));
}


var loadTasks = function() {
    var savedTasks = JSON.parse(localStorage.getItem("tasks"));
    
    for (let i = 0; i < taskDataEl.length; i++) {
        taskDataEl[i].value = savedTasks[i];
    }
}



var MomentCheck = function() {
    var time= moment().hour();
    console.log(time)

   console.log(time)
   for (let i = 0; i < taskDataEl.length; i++) {
       var currentHour = taskDataEl[i].getAttribute('id');
       currentHour=parseInt(currentHour);
       console.log(currentHour)
    if (time>currentHour) {
        $(taskDataEl[i]).addClass("past");
      } else if (time===currentHour) {
        $(taskDataEl[i]).addClass("present");
      } else {
        $(taskDataEl[i]).addClass("future");
      }
   }
    
}

MomentCheck();

formContentEl.addEventListener('click',updateTask)

loadTasks()
