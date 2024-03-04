# Stackclique Laravel Application

Welcome to Stackclique, a Learning Management System built with Laravel programming language.

## Getting Started

Follow these instructions to set up the Stackclique Laravel application on your local machine.

### Prerequisites

Before you begin, make sure you have the following installed on your system:

-   PHP (>= 7.3)
-   Composer
-   MySQL or other compatible database
-   Node.js and npm (for frontend assets, optional)

### Installation

1. Clone the repository:
 <!--
     ```bash
     git clone https://github.com/your-username/stackclique.git
     ``` -->

<!-- ```` -->

2. Navigate into the project directory:

    ```bash
    cd stackclique
    ```

3. Install PHP dependencies using Composer:

    ```bash
    composer install
    ```

4. Create a copy of the `.env.example` file and name it `.env`:

    ```bash
    cp .env.example .env
    ```

5. Generate an application key:

    ```bash
    php artisan key:generate
    ```

6. Configure your `.env` file with your database connection details.

7. Migrate the database and start up the server:

    ```bash
    php artisan migrate

    php artisan serve
    ```

8. Open another CLI, and navigate to the frontend project directory (built with react):

    ```bash
    cd stackclique-web
    ```

9. Install the packages for the frontend:
    ```bash
    npm install
    ```
10. Run the react project:

    ```bash
    npm run dev

    ```

### Running the Application

To start the development server, run:

```bash
php artisan serve
```
