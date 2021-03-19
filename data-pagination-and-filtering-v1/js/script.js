/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
//Author: Marina Harrison


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage (list, page) { //Function created to show a page of 9 students.
   let startIndex = (page * 9) - 9; 
   let endIndex = page * 9;

//Select the UL element with the class student-list and assigned to te studentList variable.
   let studentList = document.querySelector(".student-list");
  
//Set the HTML content of student-list to an empty string.
   studentList.innerHTML = "";
 
   //Created a for loop to to loop over the list parameter.  
      for (let i = 0; i < list.length; i++) {
       
//Added a conditional statment for the beginning and end of the student index.      
         if(i >= startIndex && i < endIndex) {
          let studentIndex = list[i];
          
//Used a template literal and interpolation to create the DOM elements to display the information for the students on the page.          
          let studentItem = `<li class="student-item cf">
          <div class="student-details">
            <img class="avatar" src="${studentIndex.picture.large}" alt="Profile Picture">
            <h3>${studentIndex.name.first}${studentIndex.name.last}</h3>
            <span class="email">${studentIndex.email}</span>
          </div>
          <div class="joined-details">
            <span class="date">${studentIndex.registered.date}</span>
          </div>
        </li>`;

//Inserted these newly created elements into the HTML using the 'insertAdjacentHTML' & 'beforeend' method.
         studentList.insertAdjacentHTML('beforeend', studentItem);

       }
    }
}



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

//Created the addPagination function with 'list' as the single parameter to pass student data.
function addPagination (list) { 
   
//Created the perPage variable to represent the number of pages needed.   
   let perPage = Math.ceil(list.length/9);

//Created the linkList variable to select and store the 'link-list' UL element.   
   let linkList = document.querySelector('.link-list');
   
//Added a loop for the perPage variable.   
   for (let i=1; i <= perPage; i++) {

//Created the button DOM element using a template literal and interpolation.      
      let button = `<li>
      <button type="button">${i}</button>
    </li>`;

// Inserted the newly created button element into the DOM using the 'insertAdjacentHTML' and 'beforeend' method on the link-list variable.
linkList.insertAdjacentHTML('beforeend', button);

//Selected the first button and gave it a name class name of 'active'.
let firstButton = document.querySelector('button[type="button"]');
firstButton.className = "active";

//Added a click event listen to the button
linkList.addEventListener('click',(event) => {
   
//Created a conditional statement so that the event only fires when the active button was clicked.
   if (event.target.tagName === "BUTTON"){
      let buttonActive = document.querySelector('.active');
      event.target.buttonActive = 'active';
      let page = event.target.textContent;
      
//Called the showPage function with the list and page as parameters.      
      showPage(list, page);
   }
});

   }
}


// Call functions
showPage(data, 1);

addPagination(data);

