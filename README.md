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


## Authors

- [Alan Sanchez](https://www.github.com/derpnerdd)
- [Daniel Freeman](https://www.github.com/DanielFreeman068)

