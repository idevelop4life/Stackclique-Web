# Stackclique Laravel Project Setup Guide

This guide will walk you through the steps to set up and run the Stackclique Laravel project.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

-   [PHP](https://www.php.net/) (Recommended version: PHP 8.2.4 )
-   [Composer](https://getcomposer.org/) (Dependency Manager for PHP)
-   [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (for JavaScript dependencies)
-   [MySQL](https://www.mysql.com/)
-   [Web-Server] (Apache or if you can download Xampp server it would be better.)

## Installation Steps

1.  **Clone the Repository:**

    bash
    git clone https://github.com/idevelop4life/Stackclique-Web.git

    cd Stackclique-Web

2.  **Install Dependencies:**

    bash
    composer install

3.  **Copy Environment Variables:**

            bash
            cp .env.example .env

    Update the `.env` file with your database configuration below.

    `

        DB_CONNECTION=mysql
        DB_HOST=127.0.0.1
        DB_PORT=3306
        DB_DATABASE=stackcliquetable
        DB_USERNAME=root
        DB_PASSWORD=`

4.  **Generate Application Key:**

    bash
    php artisan key:generate

5.  **Run Laravel Server:**

    bash
    php artisan serve

    Visit [http://localhost:8000](http://localhost:8000) in your browser to see your Laravel application running.

6.  **Run Migrations and Seed Database:**

    bash
    php artisan migrate --seed

    This will create the necessary tables and seed the database with default data.

    <b> Ensure to have your Xampp Apache server on now. </b>

7.  **Install JavaScript Dependencies on the front end:**

    `
    cd Stackclique

        bash
        npm install && npm run dev

    `

8.  **Visit yout frontednd url now**

    Visit [ http://localhost:3000](http://localhost:3000)

Happy coding !
