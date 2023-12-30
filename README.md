# React Favourite Pokemon App


## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [How to Use](#how-to-use)
4. [Screenshots](#screenshots)
5. [Project Structure](#project-structure)
6. [Technologies Used](#technologies-used)
7. [Contributions](#contributions)
8. [License](#license)

## Overview

The React Favourite Pokemon App is a web application built with React, Vite, the Pokemon API, Tailwind CSS, and additional features such as React `useState`, `useEffect` hooks, `react-router-dom` for routing with parameters, and `Context API` to store the favourite list. The app features a header with links for Home, Favourites, About, and Contact. The Home page displays 20 Pokemon per page, showing their names and images. It also includes previous and next buttons, along with the current page number. Clicking on any Pokemon redirects to a details page that shows all the details and includes an "Add to Favourite" button. The Favourites page in the header displays a list of favourite Pokemon with their images, names, and a "Remove from List" button.

## Features

- **Header with Links:** Includes links for Home, Favourites, About, and Contact.

- **Pokemon Listing:** Displays 20 Pokemon per page on the Home page with names, images, and navigation buttons.

- **Pokemon Details:** Clicking on a Pokemon redirects to a details page showing all the information and an "Add to Favourite" button.

- **Favourites Page:** The header displays a Favourites link, which, when clicked, shows a list of favourite Pokemon with images, names, and a "Remove from List" button.

- **React Hooks:** Utilizes React `useState` and `useEffect` hooks for managing state and fetching data.

- **React Router DOM:** Implements routing with parameters for the details page.

- **Context API:** Uses `Context API` to store the favourite list across components.

## How to Use

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/utkarshgupta04092003/8-react-favourite-pokemon.git
   ```

2. Navigate to the project directory.

   ```bash
   cd 8-react-favourite-pokemon
   ```

3. Install dependencies.

   ```bash
   npm install
   ```

4. Start the development server.

   ```bash
   npm run dev
   ```

5. Open your browser and visit [http://localhost:5173](http://localhost:5173) to explore the React Favourite Pokemon App.

## Screenshots

![React Favourite Pokemon App Screenshot](./screenshot.png)

## Project Structure

- **src/components/Header.jsx:** Component for the header with navigation links.

- **src/components/Home.jsx:** Component for the Home page with Pokemon listing and pagination.

- **src/components/PokemonDetails.jsx:** Component for displaying details of a specific Pokemon.

- **src/components/Favourites.jsx:** Component for displaying favourite Pokemon.

- **src/context/FavouritesContext.js:** Context API for managing the favourite list.

- **src/App.js:** Main application component defining routes.

- **src/styles/tailwind.css:** Tailwind CSS styles.

## Technologies Used

- React
- Vite
- Pokemon API
- Tailwind CSS
- React Hooks (`useState`, `useEffect`)
- React Router DOM
- Context API

## Contributions

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE), allowing you to use and modify the code for personal and commercial purposes.
