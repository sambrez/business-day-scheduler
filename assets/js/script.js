$(function () {

  // establishing variables of each time block
  let nine = $('#9');
  let ten = $('#10');
  let eleven = $('#11');
  let twelve = $('#12');
  let thirteen = $('#13');
  let fourteen = $('#14');
  let fifteen = $('#15');
  let sixteen = $('#16');
  let seventeen = $('#17');

  // click event that saves the user entries into local storage (id as the key, user input as the value)
  let saveBtn = $('.saveBtn');
  $(saveBtn).on('click', function () {
    console.log('test');
    let hour = $(this).parent().attr('id');
    let content = $(this).siblings('.description').val();

    localStorage.setItem(hour, content);
  });

  // loop and coditional statement that applies the appropriate class to each time block based on the current hour
  let currentHour = dayjs().get('hour');
  let timeBlock = $('.time-block');
  $(timeBlock).each(function () {
    let setTime = parseInt($(this).attr('id'));

    if (currentHour > setTime) {
      $(this).addClass('past');
      console.log(setTime, typeof setTime);
      console.log(currentHour, typeof currentHour);
    }

    else if (currentHour == setTime) {
      $(this).removeClass('past');
      $(this).addClass('present');
      console.log(setTime, typeof setTime);
      console.log(currentHour, typeof currentHour);
    }

    else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
      console.log(setTime, typeof setTime);
      console.log(currentHour, typeof currentHour);
    }
  })

// call by key to get values stored in local storage and set as value to corresponding time block textarea
  let textArea9 = nine.children('textarea').val(localStorage.getItem('9'));
  let textArea10 = ten.children('textarea').val(localStorage.getItem('10'));
  let textArea11 = eleven.children('textarea').val(localStorage.getItem('11'));
  let textArea12 = twelve.children('textarea').val(localStorage.getItem('12'));
  let textArea13 = thirteen.children('textarea').val(localStorage.getItem('13'));
  let textArea14 = fourteen.children('textarea').val(localStorage.getItem('14'));
  let textArea15 = fifteen.children('textarea').val(localStorage.getItem('15'));
  let textArea16 = sixteen.children('textarea').val(localStorage.getItem('16'));
  let textArea17 = seventeen.children('textarea').val(localStorage.getItem('17'));
  
  // function that displays the current day and date to the top of the page
  let currentDate = dayjs()
  $('#currentDay').text(currentDate.format('dddd, MMM D, YYYY'));
});

