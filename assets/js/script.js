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

var currentTime = moment();
let currentTimeEl = document.createElement('p');
let containerEl = document.createElement('div');

document.body.append(containerEl);
containerEl.appendChild(currentTimeEl);
currentTimeEl.textContent = currentTime.format('MMM DD, YYYY')



// var testEl = $('.lead').click(function(){
    
// })

