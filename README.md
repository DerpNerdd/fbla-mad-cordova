# FBLA Mobile Application Development - Regionals

### Prompt

Design a mobile application that gamifies learning for subjects like math, science, history, or
language arts, offering interactive quizzes, puzzles, and progress tracking.

The following skills are emphasized: Game development, educational content creation,
interactive design, and user feedback mechanisms.


## Table of Contents

- [Features](#features)
- [Documentation Used](#documentation)
- [Installation and Setup](#installation-and-setup)
    - [Prerequisites](#prerequisites)
    - [Clone the Repository](#clone-the-repository)
    - [Install Dependencies](#install-depencencies)
    - [Enviornment Variables](#enviornment-variables)
- [Running the Project](#running-the-project)
- [Routes and API Endpoints](#routes-and-api-endpoints)
  - [User Authentication Routes](#user-authentication-routes)
  - [User Routes](#pet-routes)
  - [Game Routes](#contact-routes)
  - [Auth Routes](#admin-routes)
- [Project Structure](#project-structure)
- [License](#license)
- [Authors](#Authors)
- [Models](#models)
- [Security Considerations](#security-considerations)
- [Known Issues and TODOs](#known-issues-and-todos)
- [Changelog](#changelog)
- [Credits](#credits)
## Features

- **User Authentication:**
  - Secure user registration and login using email and password.
  - Session management with authentication middleware.

- **Subject Tests:**
  - 4 subjects, Math, English, History, and Science, with 25 questions each to test the user on their knowledge
  - Scores are saved in their categories and can be viewable at any time
  - Detailed questions and multiple-choice answers

- **Gameified Learning:**
  - Three games to learn multiple concepts in: Tic-Tac-Toe, Jeopardy, and Timer Challenge
  - Tic-Tac-Toe: Putting in your X will prompt you with a question, answering correct will allow you to play your turn while getting it wrong skips your turn
  - Jeopardy: 4 subjects with 5 categories each to earn points from 100-500 points. The user has 3 lives and answering wrong removes 1 life. 
  - Timer Challenge: The user has 30 seconds to answer as many questions as they can, each correct question adds 3 seconds to the timer while getting it wrong removes 2 seconds

- **Customizable Profile:**
  - The profile allows you to showcase your own profile picture and banner through uploading (Cloudinary)
  - The profile also showcases your level and your high score along the 3 gameified learning games, along with your coins

- **Shop and Coins (TO BE MADE)**
  - The shop will showcase possible themes, character creation, border themes for names, etc..
  - Coins are obtained for finishing games, which can be used in the Shop

- **Leveling up and experience:**
  - Completing games gives the user Experience Points (XP)
  - Gatheing more XP allows your Level to go up

- **Responsive Design:**
  - Works on many phone screens and tablets
  - Consistent styling and branding across the platform.

---
## Documentation

[Documentation](https://linktodocumentation)

- **Frontend:**
  - HTML5, CSS3, JavaScript
  - EJS (Embedded JavaScript Templates)
  - Responsive design with media queries

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB with Mongoose ORM

- **Authentication:**
  - Passport.js for user authentication
  - bcrypt for password hashing

- **File Uploads:**
  - Multer for handling multipart/form-data

- **Email Communication:**
  - Nodemailer for sending emails to pet owners

- **Icons and Fonts:**
  - Google Fonts for typography
  - Ionicons for icons
## Installation and setup

### **Prerequisites**

- Node.js (v12 or higher)
- npm (Node Package Manager)
- MongoDB (local instance or MongoDB Atlas)

### **Clone the Repository**

```bash
git clone https://github.com/Derpnerdd/Pet-Adoption.git
cd Pet-Adoption
```
### **Install Dependencies**
```bash
npm install
```
### **Environment Variables**
Create a .env file in the root directory.

## Running the project

Start the Server
```
npm run start
```
The server will start on http://localhost:3000 or the port specified in your .env file.
## Routes and API Endpoints
**GET /login**
- Description: Render the login page.
- Access: Public
- View: login.ejs
**POST /api/v1/users/login**
- Description: Authenticate user and start a session.
- Access: Public
- Data: email, password
**GET /signup**
- Description: Render the signup (registration) page.
- Access: Public
- View: signup.ejs
**POST /api/v1/users/register**
- Description: Register a new user.
- Access: Public
- Data: username, email, password
**GET /logout**
- Description: Log out the current user and destroy the session.
- Access: Private (authenticated users)
## Pet Routes
**GET /**
- Description: Display all available pets for adoption.
- Access: Public
- View: index.ejs
**GET /pets/new**
- Description: Render the form to create a new pet listing.
- Access: Private (authenticated users)
- View: create-pet.ejs
**POST /pets**
- Description: Create a new pet listing.
- Access: Private (authenticated users)
- Data: Pet details and images.
**GET /pets/:id**
- Description: Display detailed information about a specific pet.
- Access: Public
- View: pet-details.ejs
**GET /pets/edit/:id**
- Description: Render the form to edit a pet listing.
- Access: Private (pet owner only)
- View: edit-pet.ejs
**POST /pets/edit/:id**
- Description: Update the pet listing with new information.
- Access: Private (pet owner only)
- Data: Updated pet details and images.
**POST /pets/delete/:id**
- Description: Delete a pet listing.
- Access: Private (pet owner or admin)
## Contact Routes
**GET /contact/:petId**
- Description: Render the contact form to message the pet owner.
- Access: Private (authenticated users)
- View: contact.ejs
**POST /contact/:petId**
- Description: Send a message to the pet owner via email.
- Access: Private (authenticated users)
- Data: subject, message
- Redirects to: email-sent.ejs confirmation page.
## Admin Routes
**GET /admin**
- Description: Render the admin dashboard.
- Access: Private (admin users)
- View: admin.ejs
**POST /admin/delete-user/:userId**
- Description: Delete a user from the database.
- Access: Private (admin users)
## Project Structure

```
Pet-Adoption/
├── app.js
├── package.json
├── .env
├── public/
│   ├── css/
│   │   ├── style.css
│   │   ├── pet-details.css
│   │   ├── create-pet.css
│   │   ├── auth.css
│   │   ├── contact.css
│   │   ├── email-sent.css
│   │   └── admin.css
│   ├── images/
│   └── fonts/
├── routes/
│   ├── index.js
│   ├── users.js
│   ├── pets.js
│   └── admin.js
├── controllers/
│   ├── authController.js
│   ├── petController.js
│   ├── adminController.js
│   └── contactController.js
├── models/
│   ├── User.js
│   └── Pet.js
└── views/
    ├── index.ejs
    ├── login.ejs
    ├── signup.ejs
    ├── pet-details.ejs
    ├── create-pet.ejs
    ├── edit-pet.ejs
    ├── contact.ejs
    ├── email-sent.ejs
    └── admin.ejs
```
## Key Files and Directories
- app.js: The main application file where the Express app is configured.
- routes/: Contains all route handlers for different par0ts of the application.
- controllers/: Contains controller functions that handle the logic for each route.
- models/: Mongoose schemas and models for MongoDB collections.
- views/: EJS templates for rendering HTML pages.
- public/: Static assets like CSS, images, and fonts.

## License
This project is licensed under the MIT License.

## Authors
For any inquiries or support, please contact:

- [Alan Sanchez](https://www.github.com/derpnerdd)
- [Daniel Freeman](https://www.github.com/DanielFreeman068)


## Models
**User Model (User.js)**
Fields:

- username (String)
- email (String, unique)
- password (String, hashed)
- isAdmin (Boolean, default: false)
## Security Considerations
- Password Security: User passwords are hashed using bcrypt before storing in the database.
Authentication: Sessions are managed securely using Express sessions and Passport.js.
- Input Validation: All user inputs should be validated and sanitized to prevent injection attacks.
- Access Control: Middleware functions ensure that only authorized users can access certain routes.
## Known Issues and TODOs
- Image Uploads: Currently supports JPEG, PNG, and WebP formats. Consider adding validation for file size and type.
- Email Service: Configure nodemailer with a reliable email service. Handle errors gracefully.
- Testing: Implement unit and integration tests for critical components.
- Error Handling: Improve error handling and provide user-friendly error messages.
## Changelog
v1.0.0
- Initial release with core functionalities:
- User authentication
- Pet listing management
- Contact pet owners
- Admin dashboard
## Credits
This project was developed with the aim of facilitating pet adoption and helping pets find loving homes.

Thank you for contributing to the Pet Adoption Platform!
