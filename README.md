# cse341-finalproject

This is the backend API for our CSE 341 Final Project. The API is built with Node.js, Express, MongoDB, and Swagger for documentation. The project includes four collections, full CRUD operations, OAuth authentication, and deployment on Render.
This repository contains the shared codebase for all three team members.

1. Clone the Repository
git clone https://github.com/Kelwood22/cse341-finalproject.git
cd cse341-finalproject

2. Install Dependencies
npm install

3. Create a .env File
In the project root, create a file named .env:
PORT=3000
MONGODB_URI=<your-connection-string>


The MongoDB Lead will provide the connection string.

4. Run the Server (Development Mode)
npm run dev

The server will start at:
http://localhost:3000

5. Swagger UI is available at:
http://localhost:3000/api-docs

6. To regenerate Swagger documentation after adding new routes:
node swagger.js

This updates docs/swagger.json.

To keep the project clean and avoid merge conflicts, no one should push directly to main.
Creating a Feature Branch
git checkout main
git pull
git checkout -b <branch-name>


Examples:
- mongo-collection1
- mongo-collection2
- auth-feature
- swagger-updates

7. Pushing Your Branch
git add .
git commit -m "Description of changes"
git push -u origin <branch-name>

8. Pull Requests
All changes must be submitted through a Pull Request.
The GitHub Lead (Kelsey) will review and merge PRs into main

Team Roles
- GitHub Lead: Repo setup, structure, Swagger integration, merge management
- MongoDB Lead: Database setup, models, CRUD logic
- OAuth/Render Lead: Authentication, deployment, environment variables



