Deployed Link: https://usermanagemnt.netlify.app/
# User Management Dashboard

A simple web application to manage users, allowing users to view, add, edit, and delete user details from a mock backend API (JSONPlaceholder).

## Features
- **View**: Displays a list of users fetched from the `/users` endpoint.
- **Add**: Allows users to add a new user via a form.
- **Edit**: Allows editing of existing user details.
- **Delete**: Allows deletion of users from the list.
- **Error Handling**: Displays error messages in case of API failures.
- **Client-side Validation**: Basic validation for user input.
- **Responsive**: The interface is responsive on different screen sizes.

## Technologies Used
- **Frontend**: React
- **API**: JSONPlaceholder (mock API)
- **HTTP Requests**: Axios
- **State Management**: React's useState and useEffect hooks

## Project Setup

### 1. Clone the repository
```bash
git clone https://github.com/GokulVinay/user-management-dashboard.git
cd user-management-dashboard
```

### 2. Install Dependencies
Ensure that Node.js is installed. Then, install the project dependencies using npm.

```bash
npm install
```

### 3. Run the Application
To start the development server, run:

```bash
npm start
```

This will start the React application on `http://localhost:3000`.

## Features and Usage

### Viewing Users
The users will be fetched from the JSONPlaceholder API and displayed in a list format, showing the following details:
- First Name
- Last Name
- Email
- Department

### Adding a User
Click the **"Add User"** button to open a form where you can enter the details of a new user. The form includes the following fields:
- First Name
- Last Name
- Email
- Department

Upon form submission, a POST request is sent to the API to simulate adding a new user.

### Editing a User
Click the **"Edit"** button next to any user to open the same form with pre-filled values. After making changes, click **"Save"** to update the user data via a PUT request.

### Deleting a User
Click the **"Delete"** button next to a user to delete that user from the list. This sends a DELETE request to the API.

## API Requests
The following endpoints are used to interact with the mock API:
- **GET** `/users`: Fetches a list of users.
- **POST** `/users`: Adds a new user (mocked on the JSONPlaceholder API).
- **PUT** `/users/{id}`: Updates an existing user's details.
- **DELETE** `/users/{id}`: Deletes a user.

Note: JSONPlaceholder is a mock API, so changes to users won't persist beyond the session.

## Error Handling
The application handles errors that might occur during API interactions. For example, if fetching or updating users fails, an error message is displayed.

## Bonus Features (Optional)
- **Pagination or Infinite Scrolling**: The user list can be paginated to load users in chunks for better performance.
- **Client-Side Validation**: Simple validation is implemented to ensure fields are filled before submission.
- **Responsive Design**: The app is designed to work on different screen sizes, ensuring accessibility on mobile, tablet, and desktop devices.

## Challenges & Improvements
- **Challenges**:
  - Handling mock API behavior where changes don't persist.
  - Implementing real-time validation and managing state updates efficiently.
  
- **Improvements** (if given more time):
  - Use a real backend for persisting data.
  - Enhance the UI with better styling and user feedback for loading states and errors.
