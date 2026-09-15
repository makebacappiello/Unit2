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
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
  // create a variable to calculate the number of pages needed
  const numberOfPages = Math.ceil(list.length / studentsPerPage);

  // select the element with a class of `link-list` and assign it to a variable
  const linkList = document.querySelector(".link-list");

  // set the innerHTML property of the variable you just created to an empty string
  linkList.innerHTML = "";

  // loop over the number of pages needed starting at page 1
  for (let i = 1; i <= numberOfPages; i++) {
    // create the elements needed to display the pagination button
    // insert the above elements
    const button = `<li>
     <button type="button">${i}</button>
   </li>`;
    linkList.insertAdjacentHTML("beforeend", button);
  }

  // give the first pagination button a class of "active"

  linkList.querySelector("button").className = "active";
  // create an event listener on the `link-list` element
  linkList.addEventListener("click", (event) => {
    // if the click target is a button:
    if (event.target.tagName === "BUTTON") {
      // remove the "active" class from the previous button
      linkList.querySelector(".active").className = "";

      // add the active class to the clicked button
      event.target.className = "active";

      // call the showPage function passing the `list` parameter and page to display as arguments
      showPage(list, event.target.textContent);
    }
  });
}
// Call functions
showPage(data, 1);
addPagination(data);
