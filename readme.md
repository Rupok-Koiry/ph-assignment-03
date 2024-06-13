# Car Rental System

Welcome to the Car Rental System! This guide will help you set up and run the Car Rental System application locally on your machine.

## Table of Contents

- [Project Overview](#project-overview)
- [Live URL](#live-url)
- [Features](#features)
- [Technology Used](#technology-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Setting Up Environment Variables](#setting-up-environment-variables)
- [Running the Application](#running-the-application)

## Project Overview

The Car Rental System is a web application designed to facilitate the booking and rental of cars. Users can view available cars, book them for a specific period, and return them after use. Administrators can manage the car inventory and user information.

## Live URL

Check out the live version of the application here: [Car Rental System](https://your-live-url.com)

## Features

- **User Authentication**: Sign up, log in, and manage user profiles.
- **Car Management**: Retrieve, add, update, and delete car information.
- **Booking System**: Book cars for specific periods and calculate the rental cost.
- **Admin Panel**: Manage bookings and car inventory.

## Technology Used

- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: JWT, Bcrypt
- **Validation**: Zod
- **Others**: TypeScript, Dotenv

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (version 20 or higher)
- [npm](https://www.npmjs.com/get-npm) (version 6 or higher)

## Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/Rupok-Koiry/ph-assignment-03
   cd ph-assignment-03
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

## Setting Up Environment Variables

Create a `.env` file in the root directory and add the required environment variables:

```env
NODE_ENV=development
PORT=8000
DATABASE_URL=mongodb+srv://<user_name>:<user_password>@cluster0.etdfbfi.mongodb.net/ph-university?retryWrites=true&w=majority&appName=Cluster0
BCRYPT_SALT_ROUNDS=12
DEFAULT_PASS=rupok2024
JWT_SECRET=rupok2024
JWT_EXPIRES_IN=30d
JWT_COOKIE_EXPIRES_IN=30
```

## Running the Application

To run the application in development mode with hot-reloading:

```sh
npm install
npm start:dev
```

The application will be accessible at http://localhost:8000.

Thank you for using the Car Rental System! Happy riding! 🚗💨
