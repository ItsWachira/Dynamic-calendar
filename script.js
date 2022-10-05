const currentDate = document.querySelector('.current-date');
daysTag = document.querySelector(".days");
prevNextIcon = document.querySelectorAll(".icons span");
//getting new date, current year and month


let date = new Date();
currentYear = date.getFullYear();
currentMonth = date.getMonth();

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
   'September', 'October', 'November', 'December'];

const renderCalendar = () => {
   let FirstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); //getting first day of month
   let lastDateMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); //getting last date of month
   let LastDayOfMonth = new Date(currentYear, currentMonth, lastDateMonth).getDay(); //getting last day of month
   let lastDateOfPrevMonth = new Date(currentYear, currentMonth, 0).getDate(); //getting last day of  previous month
   let liTag ="";


   for(let i = FirstDayOfMonth; i> 0 ; i--) { // creating a list of previous month last days
      liTag = liTag + `<li class="Inactive">${lastDateOfPrevMonth - 1 + i}</li>`;
   }
   for(let i = 1; i < lastDateMonth +1 ; i++) { // creating a list of all  current month days
      //adding the active class to the current day of the month and year matched.
      let isToday = i === date.getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ? "Active" : "";
      liTag = liTag + `<li class = "${isToday}">${i}</li>`;
   }
   for (let i = LastDayOfMonth; i< 6; i++) { // creating a list of next month first days
      liTag = liTag + `<li class="Inactive">${ i -  LastDayOfMonth + 1}</li>`


   }

   currentDate.innerHTML = `${months[currentMonth]} ${currentYear}`;
   daysTag.innerHTML = liTag;
}

renderCalendar();

prevNextIcon.forEach(icon =>{
   icon.addEventListener("click", () =>{ //adding a click event to the icons
      currentMonth = icon.id === "prev" ? currentMonth - 1 : currentMonth + 1;

      if(currentMonth < 0 || currentMonth > 11) { //checking if the current month is less than 0 or greater than 11
            // creating a new date object with the current year and month

            date = new Date(currentYear, currentMonth);
            currentYear = date.getFullYear(); // updating the current year
            currentMonth = date.getMonth(); // updating the current month
      }else{ // else pass new data as the date value
         date = new Date();
      }
      renderCalendar();
   })
})