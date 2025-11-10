# RESTful API for User Management

## Project Overview
This project is a simple RESTful API built with **Node.js** and **Express** to manage a list of users.  
It demonstrates:
- Routing
- Middleware usage
- HTTP methods (GET, POST, PUT, DELETE)
- Input validation
- Error handling
- In-memory data storage

---

## Technologies Used
- Node.js
- Express
- ES Modules (`type="module"`)
- Postman / ThunderClient for API testing

---

## Project Structure

project-folder/
│
├─ src/
│ ├─ index.js # Entry point
│ ├─ controller/
│ │ └─ user.controller.js # API logic
│ ├─ routes/
│ │ └─ user.route.js # Route definitions
│ ├─ middleware/
│ │ ├─ validateUser.js # Input validation
│ │ └─ logger.js # Logging requests
│ └─ data/
│ └─ users.js # In-memory users array
├─ package.json
└─ package-lock.json


### Setup Instructions
```bash
1. Clone the repository 
    (`git clone https://github.com/kushwaha1/Rest_users_api.git`).
2. Run command in vscode terminal `npm i` for installing packages.
3. Open vscode terminal and run `npm run start`.
4. The app will now be running at `http://localhost:8000/`.

```

### Testing
```bash
API Endpoints - Use Postman or ThunderClient to test all endpoints:

1. GET /users
2. GET /users/:id
3. POST /user (with valid and invalid data)
4. PUT /user/:id (with partial updates)
5. DELETE /user/:id

```

### Important updates
```bash
1. Added api screenshot document file in `doc` folder.
2. Added Postman collection in `postman-collection` folder.
    - You can import file in your postman and access the all apis.

```

### Notes
```bash
1. Users are stored in-memory; data will reset when server restarts.
2. Numeric IDs are auto-incremented.
3. PUT requests allow partial updates; only provided fields are changed.
4. Validation errors return 400 with detailed messages.
```