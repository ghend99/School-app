# School Student Managemnet App

An application built to allow easy management and maintenance of student information within schools to improve the accessibility of student information for teachers as this is something I feel is lacking.

The project came from wanting to put my time studying Javascript into practice with no tutorial to follow.

## Technologies Used

1. JavaScript (arrays, OOP, DOM)
2. HTML
3. CSS

## How to use the Application

### Adding a new student account

1. Access the create student modal thriugh the sidebar.
2. Enter the details in the inputs, ensuring there are no spaces at the start or end of the "first-name" and "last-name".
3. Once the details are entered, click the submit button to push the new account into the studetns array.
4. The majority of all features implemented require you to be logged into an account.

### Loging in

1. Upon creating a new account you enter the "full-name" of the student and the pin corresponding to the account. (the "full-name" is automaticlly created using the join() string method).
2. If an account has been created previous then you can log directly into that account without the need of having to create a new one.
3. (The reason for choosing localStorage over sessionStorage is that it made testing more effiecient, but it also mimics what it would be like to log into an account through a database.)

### Searching a student

1. Enter the correct "full-name" for the student you want to find.
2. If the "full-name" is not recognised an alert will appear infroming you of this.

### Adding a referal

1. Enter the correct "full-name" for the student you want to add a new referal to.
2. The referal will be added to the account, even if it not the currently logged in account.

### Sending a message

1. Open the compose message modal through the sidebar.
2. Enter the "full-name" of the student you want to message.
3. Provide a brief subject of the message (this will appear on the message output).
4. Write out the message and click the submit button.
5. You must be logged into an account to send a message and the reciever must exist in the localstorage.

### Providing a timetable

1. Show the timetable container through pressing the "show-timetable" button found in the sidebar.
2. Input lessons in each of the timetable sections. (every box must be filled for the feature to function as expected).
3. If you log into a different account the timetable will clear, allowing you to input new lessons for a new account. If you log back into a previous account the inputs will change to that accoutns lessons.

## Application Core Functionality

1. The application's function revolves around OOP and the creation of a primary class. When new student data is inputted, a new instance of the class is created, and this instance gains access to all properties through prototypal inheritance. When this account is created it is immediately pushed into a student's array .

2. Whenever a account needs to be searched for, the find() array method is called. The reasoning for this is that it does not return a new array, instead it allows me to mutate the original array. The is especially important with the "add-referal" feature, this is because initially I used the filter() method, however, the referal total would reset when logging out of and then back into the account. The reason for this was due to filter() returning a new array.

3. I leaned heavily on the DOM to display student data dynamically by creating reusable elements and then storing DOM changes specific to a method inside of a function that could be called at multiple points.

4. When creating the inbox system, I wanted to reinforce my knowledge of array methods. I created two properties on the Student class (sent and inbox). I attached the currently logged-in account to a global 'currentAccount' variable and paired this alongside the filter method to check the receiver's account existed inside the Students array. If the filter method returned a value, the message was pushed into the corresponding property depending on the 'currentAccount'. To gain access to the object, I used the Spread operator to expand the result of the filter method into its elements and the 'this' keyword allowed me to target the specific property to push into.

## Lessons Learned

As one of my first projects I greatly enjoyed discovering problems and then understanding the solutions.

1.  Make a list of all features to implement before beginning development. This helped me to stay on track with developing only what I needed to do at that moment. After completing one feature I'd move on to another.
2.  The importance of clean HTML and completing this before entering production. I found myself having the make adjustments due to features.

    <img src="./images/readme/functions.JPG" width='300'/>

3.  When stuck, instead of struggling through, search for solutions on Stack Overflow and then understand the solution so that I can implement it within my project.
4.  Understanding scope and what is currently possible given my understanding of JavaScript.
5.  The importance of creating designs before beginning development. This allows for a smooth creation by following pre-established designs.
6.  The importance of the call stack and the order in which functions are called that perform DOM. I found myself in the early stages of development becoming confused as to why my function calls were not behaving as expected. This stretches to the order of declaring my JavaScript files inside my HTML.
7.  The key lesson I've taken away from this project is a much deeper understanding of how to achieve a dynamic webpage. After conducting initial research I discovered the ability to use media queries to adjust the display of how the webpage looks depending on the screen resolution. I focused my time on how the application looked on each screen resolution size, instead of taking into consideration how the application collapses. After completing the project I now understand how the properties of "Min/Max-Width", "Min/Max-Height" and "clamp" are the way to go when adjusting the size of containers. In the future, I would use media queries to change which elements are displayed.
8.  This lesson comes after refactoring my HTML and CSS. Initially, I relied on media queries to change the layout of my application when resizing. One oversight on my part was not accounting for changing screen resolution when scrolling. I discovered that my containers would overflow and my divs did not scale.
9.  During the process of this project I began to create my development process. When creating HTML/CSS I like to work in colors, especially when positioning my containers. This also came about when designing the dark/light toggle, on my first attempt the containers would overlap meaning my borders wouldn't show.

## Current Features

1. Add/Search for specific students.
2. The ability to switch between light and dark mode.
3. Input a schedule for the student (WIP).
4. Inbox system for communication.
5. Error messages when creating an account/logging in.
6. Storing created account inside the localstorage.

## Future Features

1. Create an API database allowing for clean storage of information.
2. Using a database backend/library for the inbox system.
3. Refactoring CSS allowing for a dynamic application, adding properties such as "min/max-width" and "min/max-height".
