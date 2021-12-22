# chalkboard

## Final Deliverable

## Site map

### Student Portal

![alt text](/images/sitemap_student.png)

### Instructor Portal

Footer stays same as Student Portal
![alt text](/images/sitemap.jpg)

## Wireframes

### Student Portal

![alt text](/images/home.png)
![alt text](/images/assignment_1.png)
![alt text](/images/mobile_wireframe.png)

### Instructor's

![alt text](/images/home_ins.jpg)
layout of assignment page and new assignment
![alt text](/images/assignment2.jpg)

## All our pages

- [`login.html`](https://github.com/AsifTalukder/chalkboard/blob/main/Deliverable_2/login.html): login page including pop up sign up form. We included the menu bar in the sign in page to navigate other pages from there directly.
- [`index.html`](https://github.com/AsifTalukder/chalkboard/blob/main/Deliverable_2/index.html): It is a home page for student portal. In this page student can can see their current, previous and future courses list. Also they can see what's due soon. Only grades, course and register pages are accessible.
- [`grades.html`](https://github.com/AsifTalukder/chalkboard/blob/main/Deliverable_2/grades.html): This page will help students to check their current and previous courses grades.
- [`courses.html`](https://github.com/AsifTalukder/chalkboard/blob/main/Deliverable_2/courses.html): This page will help students to see their course's assignments, notes and any other important information about the course.
- [`courses-int.htm`l](https://github.com/AsifTalukder/chalkboard/blob/main/Deliverable_2/courses-inst.html) : This page is course manager for instructor. instructors can manage a course by assigning and grading students works from here.
- [`register.html`](https://github.com/AsifTalukder/chalkboard/blob/main/Deliverable_2/register.html): Students can enroll and drop(delete) from a certain course. They also can search up courses by course id or name.
- [`instructor-portal.html`](https://github.com/AsifTalukder/chalkboard/blob/main/Deliverable_2/instructor-portal.html): This is the main page for instructor portal. Instructor can see the current or previous courses they teach. They also can see important message in this page such as students assignment submissions.
- [`roster.html`](https://github.com/AsifTalukder/chalkboard/blob/main/Deliverable_2/roaster.html) : From this page a instructor can see the students name of a particular course. And inquire their grades.
- [`faculty.html`](https://github.com/AsifTalukder/chalkboard/blob/main/Deliverable_2/faculty.html) : From this page the instructor can add and delete a course. And search an existing cours
- [`admin.html`](https://github.com/AsifTalukder/chalkboard/blob/main/Deliverable_3/frontend/admin.html) : This is for the admin to go thorugh all students and instructors information.

## Used platforms in Final Deliverable 
- MongoDB as Database
- Mongoose for quering
- bcrypt for password hashing (we are having plain password but database keeps as hashed)
- Node.js and Express.js (node.js framework) used for backend
- HTML, CSS and bootstrap for the frontend
- Heroku for hosting the website

## The task have done for D3

- We used MongoDB for our database
- we implement the sign-up, sign-in and sign-out using Node.js
- We hosted our website on Heroku
- We added the admin portal that we missed to add in our past deliverable
- we pust some user data in our database
- Only the admin can retrive the database from the admin portal
- username should be unique for every user
- We worked on course menagement for this deliverable.
- We added the functionlity for student to be able to see their registered courses
- We added the functionality for student to enroll/delete a course
- Instructor aslo have a very similar funcionality to see the courses they are teahcing
- Instructor also has the ability add or delete a course.
- We also added a functionality for the instructor to approve/decline a student to their class once a student enroll
- Instructor can also view the registered students in the roaster section.
- changed the layout of the Admin page a little bit from the previous deliverable.

## Connected pages

- From login.html students, instructors or admin can go to their respective pages.
- from index.html(Student_portal) only grades, course and register pages are accessible.
- from instructor-portal.html only course_manager, roaster and faculty is accessible.

## Website link

- [ChalkBoard](https://chalk-board-frontend.herokuapp.com/)

## Contributors

Asif Talukder

Apurbo Das
