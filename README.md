Published postman documentation of crudAPI: https://documenter.getpostman.com/view/23918369/2s93sjVUfD

# CRUD Project

This is a CRUD (Create, Read, Update, Delete) project implemented using Express.js and MongoDB.

## Requirements

- Node.js (version X.X.X)
- MongoDB (version X.X.X)

## Installation

1. Clone the repository:

```bash
   git clone https://github.com/Piyush1411/Crud-Project.git
```


2. Install the dependencies:

```bash
   cd Crud-Project
   npm install
```
3. Configure environment variables:

   a. Create a .env file in the project root directory.

   b. Add the following environment variables to the .env file:

   PORT=5000
   MODE=development
   MONGO_URI=mongodb+srv://------

4. Start the server:
   npm start

   The server will start running at http://localhost:5000.

## API Endpoints
   a. GET /api/items - Retrieve all items from the database.
   b. GET /api/items/:id - Retrieve a specific item by its ID.
   c. POST /api/items - Create a new item in the database.
   d. PUT /api/items/:id - Update an existing item by its ID.
   e. DELETE /api/items/:id - Delete an item by its ID.

## Logging
The project uses the Winston logging library for basic error logging. The logs are printed to the console and stored in log files (error.log) in the logs directory.