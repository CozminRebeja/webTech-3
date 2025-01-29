# Server-Side CRUD Implementation

## Overview

This project implements **CRUD (Create, Read, Update, Delete) operations** for user management using **Express.js**. It follows the **MVC (Model-View-Controller)** pattern to ensure a clean and modular code structure. The frontend is built using **EJS** for dynamic content rendering.

## Features

### **Server-Side Implementation**

#### **CRUD Operations for Users**

- **GET **`` → Overview of the group and setup instructions.
- **POST **`` → Create a new user.
- **POST **`` → Update an existing user.
- **GET **`` → Retrieve a specific user's data.
- **GET **`` → Retrieve all users.
- **DELETE **`` → Remove a user (Implementation required).

#### **User Model**

- Stores user data.
- Implements necessary functions for data handling.

#### **User Controller**

- Implements necessary functions to handle user requests.

#### **MVC Pattern**

- **Model**: Handles data storage and logic.
- **View**: Uses **EJS** to dynamically render content.
- **Controller**: Manages request handling and business logic.

#### **Authentication**

- Only **logged-in users** can access the `/users` routes (if covered in class).

---

### **Frontend Implementation**

#### **User Views**

- **Single User Views**:
  - "Show User"
  - "Edit User"
  - "Create New User"
- **All Users Overview**:
  - Displays a list of all users.
  - Each user entry has **Edit** and **Delete** buttons.
- **Homepage**:
  - Group overview including names, IDs, and pictures.
  - Link to the users' section.

---

## General Requirements

### **User Interface (UI)**

✅ User-friendly, clean, and professional UI. ✅ Built using **EJS** for dynamic rendering.

### **Code Structure**

✅ Well-organized, following best practices. ✅ Proper naming conventions, indentation, and comments.

### **Submission Guidelines**

✅ **DO NOT** include `node_modules` in submission. ✅ Submit the project as a compressed file (.zip or .tar.gz) containing all necessary files. ✅ Include this **README.md** for instructions on running the application.

### **Documentation**

✅ Comment code for long-term maintainability. ✅ Ensure all dependencies are listed in `package.json`.

---

## How to Run the Application

### **Prerequisites**

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

### **Installation & Setup**

```sh
# Clone the repository
git clone <repository-url>
cd <project-folder>

# Install dependencies
npm install
```

### **Running the Server**

```sh
npm start
```

### **Access the Application**

- Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Dependencies

Ensure you have the following dependencies installed:

```json
{
  "dependencies": {
    "express": "^4.x.x",
    "ejs": "^3.x.x",
    "body-parser": "^1.x.x",
    "mongoose": "^6.x.x"
  }
}
```

Check `package.json` for any additional modules.
