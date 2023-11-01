// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  
  let saveBtn = $('.saveBtn');
    $(saveBtn).on('click', function () {
      console.log('test');
      let hour = $(this).parent().attr('id');
      let content = $(this).siblings('.description').val();
  
      localStorage.setItem(hour, content);
    });

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  let currentHour = dayjs().get('hour');
  let timeBlock = $('.time-block');
  $(timeBlock).each(function() {
    let setTime = $(this).attr('id');

    if (currentHour === setTime) {
      $(this).addClass('present');
      console.log(setTime);
      console.log(currentHour);
    }

    else if (currentHour < setTime) {
      $(this).removeClass('present');
      $(this).addClass('future');
      console.log(setTime);
      console.log(currentHour);
    }

    else if (currentHour > setTime) {
      $(this).removeClass('present');
      $(this).addClass('past');
      console.log(setTime);
      console.log(currentHour);
    }
  })

  
  
  

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //



  // TODO: Add code to display the current date in the header of the page.
  let currentDate = dayjs()
  $('#currentDay').text(currentDate.format('dddd, MMM D, YYYY'));
});

