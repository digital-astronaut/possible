
(function () {


let objToday = new Date(),

  dayOfMonth =  ( objToday.getDate() < 10) ? '0' + objToday.getDate()  : objToday.getDate() ,
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  curMonth = months[objToday.getMonth()],
  curYear = objToday.getFullYear();
let today = dayOfMonth + ' ' + curMonth + ' '  + curYear;

document.getElementById('currentDate').textContent = today;
})();
