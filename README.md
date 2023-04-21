This is a RESTful API for a simple task manager application built using Node.js, Express.js, and other NPM packages. The API allows users to perform CRUD operations (Create, Read, Update, and Delete) on tasks, which have a title, description, and completion status.

## Installation and Usage
To install and use this project, follow these steps:

Clone the repository: git clone https://github.com/your-username/simple-task-manager-api.git
1) Install dependencies: npm install
2) Run the server: node index.js
4) Use Postman or Curl to test the API endpoints.

# Endpoints
The API has the following endpoints:

GET /tasks
Retrieves all tasks.

GET /tasks/:id
Retrieves a single task by its ID.

POST /tasks
Creates a new task.

PUT /tasks/:id
Updates an existing task by its ID.

DELETE /tasks/:id
Deletes a task by its ID.

# Data Store
This project uses an in-memory data store (an array) to store the tasks.

# Error Handling and Input Validation
The API implements proper error handling for invalid requests and input validation for task creation and updates. The title and description fields must not be empty, and the completion status must be a boolean value.
