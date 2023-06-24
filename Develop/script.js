// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});


// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

$('#currentDay').text('Today is: ' + dayjs().format('dddd'));


// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm


// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

const timeblockArray = [$('#hour-9'), $('#hour-10'), $('#hour-11'), $('#hour-12'), $('#hour-13'), $('#hour-14'), $('#hour-15'), $('#hour-16'), $('#hour-17')];
for (let i = 0; i < 9; i++) {

  let curentTime = dayjs().format('H');


  for (let j = 9; j < 17; j++) {
    let timeCheck = dayjs().hour(j);


    if (dayjs(curentTime).isBefore(timeCheck)) {
      timeblockArray[i].addClass('past');
    } else if (dayjs(curentTime).isSame(timeCheck)) {
      timeblockArray[i].addClass('present');
    } else {
      timeblockArray[i].addClass('future');
    };
  };
};


//need a way to give dayjs() to each div ..... do as object?
// let hour09 = dayjs('09').format('H');
// let hour10 = dayjs('10').format('H');
// let hour11 = dayjs('11').format('H');
// let hour12 = dayjs('12').format('H');
// let hour13 = dayjs('13').format('H');
// let hour14 = dayjs('14').format('H');
// let hour15 = dayjs('15').format('H');
// let hour16 = dayjs('16').format('H');
// let hour17 = dayjs('17').format('H');
// console.log(hour15);









// WHEN I click into a timeblock
// THEN I can enter an event


// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage


// WHEN I refresh the page
// THEN the saved events persist