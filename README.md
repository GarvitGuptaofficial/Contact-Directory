# ISS-Hackathon-45
ISS Hackathon (Team Number 45)

IIIT Hyderabad Contact Directory
================================

IIIT Hyderabad contact directory is the place where you can Add students/faculty to the database.
Not only adding but also you can remove, edit or delete the details of students/faculty.

Navigating through the pages
============================

On opening, you'll have the HomePage and it consists of buttons which on clicking takes you to the respective pages mentioned.

Add Page
========

Here, you have to select whether you want to add to the student or the faculty database. On selecting, it redirects you to the corresponding page consisting of a form of student or faculty details which you need to fill and click submit to add to respective database.
You will see a new page showing that add is successful.
If the data entered is previously there, you'll see a prompt telling that the data is already present.
Also, you'll be asked wheather you want to add one more member or you want to go to home page.

Attributes in student form
--------------------------

|-> Name
|-> Gender
|-> Roll Number
|-> Age
|-> Email
|-> Phone Number
|-> Hostel
|-> Program
|-> Degree
|-> Batch

Attributes in faculty form
--------------------------

|-> Name
|-> Faculty ID
|-> Age
|-> Email
|-> Phone Number
|-> Research Areas
|-> Designation
|-> Qualifications

Search Page
===========

In search page, you have to select the database you have to search from, i.e., student or faculty. On selecting the option, it redirects you to the corresponding page.
Now, there are 3 text inputs one for name one for faculty ID/Roll Number and one for phone number.
You can input the required values in any combination into the inputs.
If you have not given any inputs, it displays the full corresponding database.
If there are no results, you'll see a prompt showing "No results found"

Delete or Edit Page
===================

Here, You have to select whether you want to delete or edit in the database.
Then, you are redirected to the corresponding delete/edit page.

Delete Page
===========

Here, first you have to choose the database between student or faculty.
Then enter the roll number in case of student and faculty ID in case of faculty.
If the roll number/faculty ID entered is present in the database, then it will be deleted.

The status of deletion is displayed under the form (whether it's deleted or not)

Edit Page
=========

Here, first you have to choose the database between student or faculty.
Then enter the roll number in case of student and faculty ID in case of faculty.
If the roll number/faculty ID entered is present in the database.
Then a new form will be appeared below these details where the previous data is auto-filled,
you can edit there and submit so that it's edited in the database.
Then the old data will be deleted

If the roll number is not found, you can see a prompt saying it's not there.
If the edit is successful, you'll be redirected to a page where you'll understand from the prompt that the new data is added
Also, you'll be asked wheather you want to add one more member or you want to go to home page.

NavBar
======

NavBar consists of 4 elements showing

 |->Home : Takes you to home page
 |->Add Item : Takes you to Add page
 |->Edit/Delete : Takes you to Edit or Delete page
 |->Search : Takes you to search page

Setting up and using this on your PC :
======================================

Open terminal in the current folder and run "python3 app.py"
Then open browser and go to http://localhost:5000/
This takes you to the Home page, Navigate as mentioned above.

{{  We have used flask, sqlite3, urllib.parse, flask_cors libraries and used flask framework.  }}

Team Contribution
=================

Varun -> Add page, Edit or delete page
Garvit and Vivek -> Search page, Styling and NavBar

Directory Sturctue
==================

.
├── app.py
├── assumptions.md
├── Problem Statement.jpeg
├── README.md
├── static
│   ├── addFacPage.css
│   ├── addStudentPage.css
│   ├── database.db
│   ├── database.py
│   ├── deleteScript.js
│   ├── editPage.css
│   ├── editScript.js
│   ├── homepage.css
│   ├── IIITLogo2.png
│   ├── IIITlogo.png
│   ├── navBar.css
│   ├── search_fac.js
│   ├── searchStu.css
│   └── search_student.js
└── webpages
    ├── addFaculty.html
    ├── addPage.html
    ├── addStudent.html
    ├── deleteOrEdit.html
    ├── deletePage.html
    ├── editPage.html
    ├── failedToAdd.html
    ├── HomePage.html
    ├── navBar.html
    ├── searchFac.html
    ├── SearchPage.html
    ├── searchStu.html
    └── succesfulAdd.html
