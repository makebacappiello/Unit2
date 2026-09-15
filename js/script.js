/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2 
*/

// gets the array of objects from the dom

console.log(data);
const studentsPerPage = 9;

// Create the `showPage` function
// This function will create and insert/append the elements needed to display a "page" of nine students
// */

function showPage(list, page) {
  // this will equal to 0 for the first index
  let startIndex = (page - 1) * studentsPerPage;
  let endIndex = page * studentsPerPage;
  let studentList = document.querySelector(".student-list");
  studentList.innerHTML = " ";

  //looping through the data
  for (let i = 0; i < list.length; i++) {
    // checking validation for each student's index on page then creating the element.
    if (i >= startIndex && i < endIndex) {
      //getting the object from the array
      let student = list[i];
      //building the items for the page using their location via .notation
      let studentItem = `<li class="student-item cf">
          <div class="student-details">
      <img class="avatar" src=${student.picture.medium} alt="Profile Picture">
      <h3>${student.name.first} ${student.name.last}</h3>
      <span class="email">${student.email}</span>
    </div>
    <div class="joined-details">
      <span class="date">${student.registered.date}</span>
    </div>
  </li> `;
      //place it into the dom
      studentList.insertAdjacentHTML("beforeend", studentItem);
    }
  }
}
showPage(data, 2);
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

// Call functions
