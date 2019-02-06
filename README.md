# READ ME

## Link (URL) to the project:

http://travel-n-move-react-staging.s3-website-ap-southeast-2.amazonaws.com/

## Link to GitHub repository

- Front End (React): https://github.com/dav-armour/travel-n-move-react
- Back End (Express): https://github.com/dav-armour/travel-n-move-express

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

1. As a user I want a website where I can find more information on locations and tours my business is offering

2. As a website owner I want the website so that prospects can contact me on the products I am selling

3. As a website owner I want business logo, name and contact number to appear at the top of the page

4. As a user I want to inquire on Flights

5. As a user I want to inquire on Hotels

6. As a user I want to inquire on Holidays

7. As a website owner I want the inquired information to be saved in the database and emailed to him

8. As a website owner I want thumbnails at the lower part of the webpage displaying special offers and promotions

9. As a website owner I want clicking on those thumbnails should direct to a new page that has detail on the ad shown on the thumbnail

10. As a website owner I want an admin login to view inquiries/quotes by date, edit and delete past inquiries/quotes, post ad banners
