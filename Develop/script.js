// display the current date at the top of the calendar
//  - create variable
function currentDate() {
	var todaysDate = new Date();
	console.log(todaysDate);
	//  - using get method to display the current date
	var day = todaysDate.getDate();
	var month = todaysDate.getMonth();
	var year = todaysDate.getFullYear();
	var date = dat + '-' + (month + 1) + '-' + year;
}

// display time blocks for current business hours
//  - display block level element
//  - create array for hours to represent
//  - create a for loop to loop over until the end of the array
// color code each time block to represent the current time, past time of in the future
//  - create a function to get the current time
// when the time block is clicked, I can enter the event
//  - create function
//  - add event listener when clicked on
//  - append text input
// save the event when it is clicked inside of local storage
//  - create function
//  - add event listener
//  - when save button is clicked, store the content inside of local storage
// after refreshing, the saved events still remains
