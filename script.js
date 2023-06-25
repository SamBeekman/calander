function init() {

  // WHEN I open the planner
  // THEN the current day is displayed at the top of the calendar

  function timeDisplay() {
    $('#currentDay').text('Today is: ' + dayjs().format('dddd, h:MM:ss a'));
  }
  setInterval(timeDisplay, 1000);
  timeDisplay();

  // WHEN I scroll down
  // THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm
  // completed in HTML

  // WHEN I view the timeblocks for that day
  // THEN each timeblock is color coded to indicate whether it is in the past, present, or future

  const timeblockArray = [$('#hour-9'), $('#hour-10'), $('#hour-11'), $('#hour-12'), $('#hour-13'), $('#hour-14'), $('#hour-15'), $('#hour-16'), $('#hour-17')];

  const currentTime = dayjs();

  for (let i = 0; i < timeblockArray.length; i++) {
    let timeCheck = dayjs().hour(i + 9);

    if (dayjs(timeCheck, 'h').isBefore(currentTime, 'h')) {
      timeblockArray[i].addClass('past').removeClass('present future');
    } else if (dayjs(timeCheck, 'h').isAfter(currentTime, 'h')) {
      timeblockArray[i].addClass('future').removeClass('past present');
    } else if (dayjs(timeCheck, 'h').isSame(currentTime, 'h')) {
      timeblockArray[i].addClass('present').removeClass('past future');
    };
  };

  // WHEN I click into a timeblock
  // THEN I can enter an event
  // was already functional

  // WHEN I click the save button for that timeblock
  // THEN the text for that event is saved in local storage

  $('.btn').on('click', function (event) {
    let userInput = $(event.target).closest('.time-block').find('.description').val();
    let userID = $(event.target).closest('.time-block').attr('id');
    localStorage.setItem(userID, userInput);
  });

  // WHEN I refresh the page
  // THEN the saved events persist

  for (let k = 9; k < 18; k++) {

    if (localStorage.getItem(`hour-${k}`)) {
      console.log(localStorage.getItem(`hour-${k}`));
      $(`#hour-${k}`).find('.description').val(localStorage.getItem(`hour-${k}`));
    }
  }
};

init();