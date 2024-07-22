# Project Setup Guide

## Overview

This project consists of:
- **Backend**: A Node.js and Express server
- **Database**: A MySQL database
- **Frontend**: A React application

Follow these instructions to set up and run the project locally.

## Prerequisites

Ensure you have the following installed:
- **Node.js** and **npm**: [Download and install Node.js](https://nodejs.org/) (npm is included)
- **MySQL**: [Download and install MySQL](https://dev.mysql.com/downloads/)
- **serve**: For serving the React build (install via npm)

## Setup Instructions

### 1. Database Setup

To set up your local MySQL database and seed it with demo data, follow these steps:

#### Seed the Data

1. Open your terminal or command prompt.

2. Run the SQL script located in `backend/db/seed.sql` to populate your database with demo data. Use the following commands based on your preferred method:

#### Configure .ENV Values

1. Navigate to the `backend` directory
2. Create a file named `.env`
3. add the following content to the `.env` file
   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=YOUR_PASSWORD
   MYSQL_DATABASE=demo_db
   ```
   Replace YOUR_PASSWORD with your actual MySQL password. Ensure there are no extra spaces or characters.

#### Start Backend Server

1. Navigate to backend directory
2. install necessary dependencies
   ```npm install ```
3. Start the server
   ```npm run start```

#### Start the Frontend Application

1. navigate to the frontend
2. use the `serve` command to serve the application on localhost:3000/ by using the command
   
   ```serve -s build```
   
   if you don't have `serve` installed, you can install it by running
   
   ```npm install -g serve```
