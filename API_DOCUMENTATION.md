# API Documentation

This document describes the endpoints available for interacting with the API.

## Base URL

All endpoints are relative to the base URL of the API.

http://127.0.0.1:8000/api/

## User Authentication

### Signup

-   **Endpoint:** `POST /signup`
-   **Parameters:**
    -   `name` (string): User's name.
    -   `email` (string): User's email address.
    -   `password` (string): User's password.

### Login

-   **Endpoint:** `POST /login`
-   **Parameters:**
    -   `email` (string): User's email address.
    -   `password` (string): User's password.

### Logout

-   **Endpoint:** `POST /logout`
-   **Headers:** `Authorization: Bearer <token>`
    -   Replace `<token>` with the JWT token received upon login.

### Profile Management

#### Update Profile Photo

-   **Endpoint:** `POST /update-profile-photo`
-   **Headers:** `Authorization: Bearer <token>`
-   **Parameters:**
    -   `photo` (file): User's profile photo.

#### Update Cover Photo

-   **Endpoint:** `POST /update-cover-photo`
-   **Headers:** `Authorization: Bearer <token>`
-   **Parameters:**
    -   `photo` (file): User's cover photo.

#### Verify Email

-   **Endpoint:** `POST /verify-email`
-   **Headers:** `Authorization: Bearer <token>`

#### User Details

-   **Endpoint:** `GET /user-details`
-   **Headers:** `Authorization: Bearer <token>`

## Courses

### Course Management

#### Create Course

-   **Endpoint:** `POST /courses`
-   **Parameters:**
    -   `title` (string): Course title.
    -   `description` (string): Course description.

#### Get All Courses

-   **Endpoint:** `GET /courses`

#### Get Course by ID

-   **Endpoint:** `GET /courses/{id}`

#### Update Course

-   **Endpoint:** `PUT /courses/{id}`
-   **Parameters:**
    -   `title` (string): New course title.
    -   `description` (string): New course description.

#### Delete Course

-   **Endpoint:** `DELETE /courses/{id}`

## Course Categories

### Course Category Management

#### Create Course Category

-   **Endpoint:** `POST /course-categories`
-   **Parameters:**
    -   `name` (string): Category name.

#### Get All Course Categories

-   **Endpoint:** `GET /course-categories`

#### Get Course Category by ID

-   **Endpoint:** `GET /course-categories/{id}`

#### Update Course Category

-   **Endpoint:** `PUT /course-categories/{id}`
-   **Parameters:**
    -   `name` (string): New category name.

#### Delete Course Category

-   **Endpoint:** `DELETE /course-categories/{id}`

## Channels

### Channel Management

#### Create Channel

-   **Endpoint:** `POST /channels`
-   **Parameters:**
    -   `name` (string): Channel name.

#### Get All Channels

-   **Endpoint:** `GET /channels`

#### Get Channel by ID

-   **Endpoint:** `GET /channels/{id}`

#### Update Channel

-   **Endpoint:** `PUT /channels/{id}`
-   **Parameters:**
    -   `name` (string): New channel name.

#### Delete Channel

-   **Endpoint:** `DELETE /channels/{id}`

## Course Reviews

### Index

-   **Endpoint:** `GET /course_reviews`
-   **Description:** Get a list of all course reviews.

### Create

-   **Endpoint:** `POST /course_reviews`
-   **Description:** Create a new course review.

### Edit

-   **Endpoint:** `PUT /course_reviews/{course_review}`
-   **Description:** Update a specific course review.

### Delete

-   **Endpoint:** `DELETE /course_reviews/{course_review}`
-   **Description:** Delete a specific course review.

## Chat Management

### List all chat messages

-   **Endpoint:** `GET /chats`

### Create a new chat message

-   **Endpoint:** `POST /chats`

### Retrieve a single chat message

-   **Endpoint:** `GET /chats/{chat}`

### Update a chat message

-   **Endpoint:** `PUT /chats/{chat}`

### Delete a chat message

-   **Endpoint:** `DELETE /chats/{chat}`

## Course Modules

### Display a listing of the resource

-   **Endpoint:** `GET /modules`

### Show the form for creating a new resource

-   **Endpoint:** `GET /modules/create`

### Store a newly created resource in storage

-   **Endpoint:** `POST /modules`

### Display the specified resource

-   **Endpoint:** `GET /modules/{module}`

### Update the specified resource in storage

-   **Endpoint:** `PUT /modules/{module}`

### Remove the specified resource from storage

-   **Endpoint:** `DELETE /modules/{module}`

## Course Enrollments

### Index

-   **Endpoint:** `GET /enrollments`

### Create

-   **Endpoint:** `POST /enrollments`

### Show

-   **Endpoint:** `GET /enrollments/{enrollment}`

### Edit

-   **Endpoint:** `GET /enrollments/{enrollment}/edit`

### Update

-   **Endpoint:** `PUT /enrollments/{enrollment}`

### Delete

-   **Endpoint:** `DELETE /enrollments/{enrollment}`

## Notifications

### Index

-   **Endpoint:** `GET /notifications`

### Create

-   **Endpoint:** `POST /notifications`

### Show

-   **Endpoint:** `GET /notifications/{notification}`

### Update

-   **Endpoint:** `PUT /notifications/{notification}`

### Delete

-   **Endpoint:** `DELETE /notifications/{notification}`

## Personal Access Tokens

### Index

-   **Endpoint:** `GET /personal-access-tokens:`

### Create

-   **Endpoint:** `POST /personal-access-tokens: `

### Show

-   **Endpoint:** `GET /personal-access-tokens/{id}: `

### Update

-   **Endpoint:** `PUT /personal-access-tokens/{id}`

### Delete

-   **Endpoint:** `DELETE /personal-access-tokens/{id}`

## Password Reset

### Index

-   **Endpoint:** `GET /password-resets`

### Create

-   **Endpoint:** `POST /password-resets `

### Show

-   **Endpoint:** `GET /password-resets/{id}: `

### Update

-   **Endpoint:** `PUT /password-resets/{id}`

### Delete

-   **Endpoint:** `DELETE /password-resets/{id}`

```

```
