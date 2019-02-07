# READ ME

## Link (URL) to the project:

http://travel-n-move-react-staging.s3-website-ap-southeast-2.amazonaws.com/

## Link to GitHub repository

- Front End (React): https://github.com/dav-armour/travel-n-move-react
- Back End (Express): https://github.com/dav-armour/travel-n-move-express

## Link to Trello Board

- https://trello.com/b/iqkwdQ2J/mern-project

## Description of the project

### Problem definition / purpose:

Website redesign for travel consultant based in India that sells tour packages, air tickets and book hotel accommodation. His present website is out of date in term of technology and not user friendly which is preventing him to get enough sales lead through internet.

We took this opportunity to make the website using Javascript, React and Redux as the front end and Mongo DB at the backend technology. This website is submitted as a project for the completion of our Diploma of Webdevelopment.

### Functionality / features:

Functionality:

1. A navigation bar at the top to navigate to different pages of the website - home, tour packages, about us, contact us, login

2. Request quotes for holiday packages, hotels and flights

3. Display key popular tour packages as a summary card on the home page

4. Ability to further drill down the summary to get detail on the tour packages

5. A separate tour package page to list down all the tour packages that business has to offer

6. Each tour packages can be further drilled down to get the more information

7. About us page that gives more information on the business

8. Contact us page with a form to enquiry on any products and address details to ring or visit the travel agent

9. Login page for an admin that gives the admin with an access to a complete Dashboard with the following sections:

   - Dashboard home page - this page gives quick summary on Quote requests, Enquiries and Tour Packages

   - Quote page - this page lists out all the quotes on tabular form

   - Customer enquiry page - this page lists all the enquiries from the customer

   - Tour page - this page lists all the tours that have been posted in the website

   - Create Tour page - this page gives admin the access to create a new tour that can be listed in the website

Features:

1. The website is responsive to different screen size

2. Cleverly selected colours and fonts to give users a plesent experience when using the website

3. Easy to understand menu bars, forms and fields. User can navigate through the website and get the required information with less number of clicks and confusions

Each field on the form have description, validation attached for the user to input necessary data, "Learn more" and "Request Quote" for holidays are located on appropriate spot etc

4. Each time a user sends a quote request an email gets fired to a nominated account for admin to let him know on the new quote enquiry and an email to the user thanking for the quote request

5. Routes has been authorized and authenticated to prevent malicious activities, password encrypted

6. A complete Dashboard that gives an admin ability to edit, update and delete contents on the website:

   - Dashboard home page gives data summary on Quote Requests, Enquiries and Tour Packages. Information is break down further to different process stages which helps business owner to get quick understanding of this business

   - Quote, Enquiries, Tours pages list data in tabular format in newest first order. Clicking on the each row gives admin ability to update the data

   - Create Tour page allows admin to enter information on the new tour. "Feature on the home page" check box helps to make a tour package either featured (to show on the home page) or not (to list on the tour package page)

### Screenshots:

### Tech Stack: - React - Redux - Mongo DB - HTML 5 - CSS 4

### Instruction on how to setup, configure, deploy and use your App

The front end has been deployed into AWS and the database has been deployed into MongoDB Atlas. Email handling during the quote submition is handled through SendGrid. AWS, Mongo DB Atlas and SendGrid has been configured to speak to each other to run the website successfully.

The app has .env.example file which serves as a guideline to set up a .env file. Based on where fornt end and backend have been deployed, .env file has to be polulated with correct keys and links for the app to work.

Initially the database is empty with a admin login. The client has to log into admin dasboard > create tour and enter new tour data and photos. He needs to select either the tour package is featured or not. Based on his selection the tour packages will appear either on the home page or on the tour package page.

User can select appropriate tab on the home page, fill in the forms with necessary data and request for the quote. The user can also view featured Tours on the lower part of the home page. Each tour has a link to a page that details further on it to give more information to the user. User can hit request a quote button from any page to make an enquiry.

Page on about us gives extra information about the business where as contact us to lodge any enquirey that does not fit into forms given on the site.

Admin can log into dasbhoard to update and edit tour package data posted on the webpage.

### Design process

### User stories

#### Owner stories

1. As a website owner I want the website so that prospects can contact me on the products I am selling

2. As a website owner I want business logo, name and contact number to appear at the top of the page

3. As a website owner I want the inquired information to be saved in the database and emailed to myself as a notification on new enquiry

4. As a website owner I want thumbnails at the lower part of the webpage displaying special offers and promotions

5. As a website owner I want clicking on those thumbnails should direct to a new page that has detail on the ad shown on the thumbnail

6. As a website owner I want an admin login to view inquiries/quotes by date, edit and delete past inquiries/quotes, post ad banners

7. As a website owner I want a quick summary on Holidays, Flights and Hotels broken down by their status

#### User stories

1. As a user I want a website where I can find more information on locations and tours my business is offering

2. As a user I want to inquire on Flights

3. As a user I want to inquire on Hotels

4. As a user I want to inquire on Holidays

5. As a user I want to see all the tours that are on offer/promotion

6. As a user I want to contact the business on my feedbacks and general enquiries

7. As a user I want a confirmation email after I submit a request and feedback to make sure the business received by request

### Project plan and timeline

After interacting with the client we listed down all his requirements, evaluated those requirements with the time we had in hand. We streamlined the requirements and communicated with
the client on his final approval.

Client provided us with snippit on forms to give us an idea on his requirements. He also provided us with some sample websites for reference. Some of website he sent were as follows:

1. flightcentre - https://www.flightcentre.com.au/tours
2. webjet/india - https://exclusives.webjet.com.au/deals/special-deals/india/cheap-india-tours/
3. luxuryescapes - https://luxuryescapes.com/au/tours
4. incredible india - https://www.theincredibleindia.org/first_timer_india.html

We designed wireframes based on his requirements, snippits and the sample websites he sent, sent wireframe for his approval and once approved, we set up a trello board.

We evaluated strength and weaknesses of each team members, their interests when it came to the work devision. Our focus was to divide the work in way that each team member gets to exposure of all the features and functions of the website.

We set up tasks in the trello board and created repository in GitHub for fornt and back end. We updated trello board on our way to the development of the project.

Project duration was for the 4 weeks.
Project Start Date: 14/01/19
Project End Date: 07/02/19

### Client Communication

Date Time Description

11th January 3:05 PM

Spoke to Deepak on project requirements. He explained what he wants to cover on his webpage. And promised to send us some screenshots through

13th January 11:10 PM
Received photos from the client

14th January 5:07 PM
Spoke to Deepak on the email sent on the requirements. Discussed why it is not possible to meet all of his requirements. Asked him to check on the list we have plannin to accomplish.
Deepak is okay if we change colour of the logo He wants website to be more Tour focused/ less flight and car rentals. He is sending us photos to put on the website
He has agreed to reply on the email by today/tomorrow

17th January 6:47 PM
Spoke to the client on Images. Client is arranging those images. He wants us to make the site bit colourful and site more foused on the "tour packaging"
22nd January 3:05 PM
Update the client on the project progress, sent him link of AWS where the project was deployed

23rd January 12:00 PM
Received images from the client, spoke to him on those images and let him know that they were not of the top quality
4th January 5:43 PM
Updated the client that the project is near to the end and had a chat on getting his profile picture to put on the website

5th January 2:07 PM
Spoke to the client on setting up account on AWS, MongoDB Atlas and SendGrid, received his credentials

6th January 4:30 PM
Dialed into client's machine and took him through the website (website demo), explained him how to set up the tour cards and other details

6th January 5:00 PM
Texted the client to get details of godaddy.com where he bought his domain from so that we can replace his present website with the new one

## Short question answer

### 1. What are the most important aspects of quality software?

There are many important aspects of quality of software. According to Ian Sommerville who authored, Software Engineering, the 4 main principles are of a software program is how well it does the following:

- Maintainability which includes extensibility, flexibility and being able to cope with future changes without damaging the current system

- Dependability which includes aspects like security and accessibility
  Efficiency which includes performance, resource utilization and platform compatibility and portability

- Usability - which includes things like functionality design and user satisfaction and user experience including accessibility for people with disabilities
  Additionally, quality software requires quality testing and adequate test coverage

### 2. What libraries are being used in the app and why?

We are using Javascript as the scripting language. The following software packages have been used:

#### Back-end development

1. Node JS
2. Express JS
3. Validation
4. Celebrate package - for email and password validation
5. Authentication
6. Passport, Passport local, passport-local-mongoose and passport-jwt strategies - for authentication
7. JSONwebtoken - for authentication and generation of the JSON web token

#### Error - logging

1. Morgan - to log HTTP errors
2. Development Dependencies
3. Faker - for seeding data
4. Forever - for ensuring the server is kept running
5. Jest - for testing
6. Nodemon - for automatically restarting the node application when file changes in the directory are detected
7. Supertest - for testing

#### Database

1. MongoDB
2. Mongoose

#### Front-end development

1. React -a JS library for building user interfaces
2. Material UI - a React UI framework
3. React-dom - provides DOM specific methods to be used by our application
4. React-router-dom - a routing library for React
5. Redux - a state management library for JS apps
6. Redux Thunk - middleware that lets you call action creators that return a function instead of an action object.
7. Redux Forms - manages form state in redux

### 3. A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?

As a team, it would be useful for team members to:

- Establish the team values and how team members treat and communicate with each other during the project
- Identify the key skills and strengths as well as the weaknesses each team members has - to ensure the team members work in compliment to each other
- Establish key roles and responsibilities in the project including a project manager, tech lead, design lead and client liaison and so on.
- Understanding of best practice software programming principles and practices
- Utilisation of up to-date and extensible software
- Understand the client needs and their business needs, goals and challenges, at present and going into the future (so as to build a fit-for-purpose website)
- Understand the key problems the website will need to solve for the client
- Understand the project specifications including the business goals, key deadlines, customer and user target markets, budget and resources available including resources to maintain the website after the initial build
- Communicate to the client, the project scope and the consequences (e.g. extra costs, time) of scope creep
- Iterate and develop the website in consultation with the client (i.e. take an agile approach)
- Establish a consistent and clear communication channel with the client before, during and immediately after the project

### 4. Within your own project what knowledge or skills were required to complete your project, and overcome challenges?

Within our project we used the following knowledge and skills:

Project management skills and assigning tasks to each team members and using tools like Trello, Google docs. We had 3 major roles within the team to to get the project done:

1. Project Manager
2. Tech Lead
3. Client Liaison

Time management - We had a stand-up meeting and went through the tasks for each day, every day and make changes to tasks etc as needed. We used these meetings to support each other through challenging tasks or blocks that had come up

Consistent and constant communication - we communicated frequently in-person as well as using communication tools like Slack. Clear and supportive communication was especially needed when we faced challenges or delays - at these points; we had to ensure we had to work together as team as opposed to working as individual team members.

Technical programming competence - Each team member had their own level of technical competence and we appointed the most technically competent person as the as Tech Lead.

### 5. Evaluate how effective your knowledge and skills were this project, using examples, and suggest changes or improvements for future projects of a similar nature?

Knowledge and skills brought by all three team members played a key role in the completion of the project. Soft skills like a good team player, communication skill, resilience was needed for the successful completion of this project.

Technical skills like understanding of HTML, CSS, Javascript, React, Redux, MongoDB and various npm packages were helpful too.

For example, a good communication skill to update each team members on the work progress, helping each other to overcome hurdles and learning from each other was effective and efficient. Updating client on timely manner helped to keep him happy and patience.
Understanding of HTML and CSS help that we learnt on the early stage of the course was helpful on styling. Javascript, React, Redux helped us on building over all website on efficient manner (breaking down the website into components, proper data flow between pages etc).  
Improvement for the future projects would be on code reviews, doing code review offered us so much of learning from each other. It was not on the rubric.

### 6. Demonstrate your ability to satisfy your client with the quality of your work and high level of service.

We kept our client’s requirements in centre from the start of this project. On each milestone the client was updated, was asked to review the website and give us feedback, discuss with him on progress and plans for the next few days to come, and if appropriate let him know hurdles to set realistic expectation on him.

Following were our steps on this regard:

1. Record interactions with your client in a diary format
2. Plan information gathering activities to determine project requirements, constraints and risks
3. Develop project charter, including preliminary statement of project scope and obtain sign-off
4. Prepare project work breakdown and schedule
5. Allocate roles and responsibilities to team members, based on project solution requirements
6. Monitor each other’s assigned work
7. Reassess ongoing project scope changes, risks and issues
8. Manage system testing and hand over activities. Prepare maintenance or support plans for client
9. Obtain final project sign-off
10. As a team, conduct post project review

### 7. Data flow diagram

### 8. OOD Diagram

### 9. Flawless code flow control: documented test coverage/successful results for all user stories, including corner cases

### 10. Provide UX/UI design documentation(user stories) that adequately show Agile methodology implementation.

Please refer to read me file for usr stories and wireframe document for UX/Ui design.
