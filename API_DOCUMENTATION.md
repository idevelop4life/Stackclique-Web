### User Authentication

#### Signup

-   **Endpoint:** `POST /signup`
-   **Parameters:**
    -   `name` (string): User's name.
    -   `email` (string): User's email address.
    -   `password` (string): User's password.

#### Login

-   **Endpoint:** `POST /login`
-   **Parameters:**
    -   `email` (string): User's email address.
    -   `password` (string): User's password.

#### Logout

-   **Endpoint:** `POST /logout`
-   **Headers:** `Authorization: Bearer <token>`
    -   Replace `<token>` with the JWT token received upon login.

#### Profile Management

##### Update Profile Photo

-   **Endpoint:** `POST /update-profile-photo`
-   **Headers:** `Authorization: Bearer <token>`
-   **Parameters:**
    -   `photo` (file): User's profile photo.

##### Update Cover Photo

-   **Endpoint:** `POST /update-cover-photo`
-   **Headers:** `Authorization: Bearer <token>`
-   **Parameters:**
    -   `photo` (file): User's cover photo.

##### Verify Email

-   **Endpoint:** `POST /verify-email`
-   **Headers:** `Authorization: Bearer <token>`

##### User Details

-   **Endpoint:** `GET /user-details`
-   **Headers:** `Authorization: Bearer <token>`

---

### Courses

#### Course Management

##### Create Course

-   **Endpoint:** `POST /courses`
-   **Parameters:**
    -   `title` (string): Course title.
    -   `description` (string): Course description.

##### Get All Courses

-   **Endpoint:** `GET /courses`

##### Get Course by ID

-   **Endpoint:** `GET /courses/{id}`

##### Update Course

-   **Endpoint:** `PUT /courses/{id}`
-   **Parameters:**
    -   `title` (string): New course title.
    -   `description` (string): New course description.

##### Delete Course

-   **Endpoint:** `DELETE /courses/{id}`

---

### Course Categories

#### Course Category Management

##### Create Course Category

-   **Endpoint:** `POST /course-categories`
-   **Parameters:**
    -   `name` (string): Category name.

##### Get All Course Categories

-   **Endpoint:** `GET /course-categories`

##### Get Course Category by ID

-   **Endpoint:** `GET /course-categories/{id}`

##### Update Course Category

-   **Endpoint:** `PUT /course-categories/{id}`
-   **Parameters:**
    -   `name` (string): New category name.

##### Delete Course Category

-   **Endpoint:** `DELETE /course-categories/{id}`

---

### Channels

#### Channel Management

##### Create Channel

-   **Endpoint:** `POST /channels`
-   **Parameters:**
    -   `name` (string): Channel name.

##### Get All Channels

-   **Endpoint:** `GET /channels`

##### Get Channel by ID

-   **Endpoint:** `GET /channels/{id}`

##### Update Channel

-   **Endpoint:** `PUT /channels/{id}`
-   **Parameters:**
    -   `name` (string): New channel name.

##### Delete Channel

-   **Endpoint:** `DELETE /channels/{id}`

---

### Course Reviews

#### Index

-   **Endpoint:** `GET /course_reviews`
-   **Description:** Get a list of all course reviews.

#### Create

-   **Endpoint:** `GET /course_reviews/create`
-   **Description:** Show the form to create a new course review.

-   **Endpoint:** `POST /course_reviews`
-   **Description:** Create a new course review.

#### Show

-   **Endpoint:** `GET /course_reviews/{course_review}`
-   **Description:** Get details of a specific course review.

#### Edit

-   **Endpoint:** `GET /course_reviews/{course_review}/edit`
-   **Description:** Show the form to edit a specific course review.

-   **Endpoint:** `PUT /course_reviews/{course_review}`
-   **Description:** Update a specific course review.

#### Delete

-   **Endpoint:** `DELETE /course_reviews/{course_review}`
-   **Description:** Delete a specific course review.

---
