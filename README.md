# Personal Website

This repository contains the source code for my personal website. It's a simple, single-page application built with HTML, CSS, and JavaScript.

## Table of Contents

- [Project Structure](#project-structure)
- [HTML (`index.html`)](#html-indexhtml)
- [CSS (`style.css`)](#css-stylecss)
- [JavaScript (`script.js`)](#javascript-scriptjs)
- [Icons](#icons)

## Project Structure

The project is organized as follows:

```
/
├── index.html
├── style.css
├── script.js
├── LebenslaufSaadAlam2025.pdf
├── README.md
└── icons/
    ├── email.svg
    ├── github.svg
    ├── linkedin.svg
    └── x.svg
```

- `index.html`: The main HTML file that defines the structure of the website.
- `style.css`: The stylesheet that controls the visual appearance of the website.
- `script.js`: The JavaScript file that adds dynamic functionality to the website.
- `LebenslaufSaadAlam2025.pdf`: My curriculum vitae (CV).
- `README.md`: This file, providing an overview of the project.
- `icons/`: A directory containing SVG icons for social media links.

## HTML (`index.html`)

The `index.html` file is the skeleton of the website. It's a standard HTML5 document with a `<head>` and a `<body>`.

### Head

- **Meta Tags**: Includes basic meta information like character set (`UTF-8`) and viewport settings for responsive design.
- **Title**: Sets the title of the page to "Saad Alam".
- **Stylesheet**: Links to the `style.css` file to apply styling.

### Body

The body is wrapped in a `div` with the class `container` to center the content. It's divided into four main sections:

1.  **Header**: Displays my name, "Saad Alam," and my title, "Physics Student at TUM (M.Sc.)."
2.  **About Me (`#about`)**: A brief introduction about myself and a button to download my CV.
3.  **Projects (`#projects`)**: A section to showcase my projects. The projects are dynamically loaded from the `script.js` file.
4.  **Contact (`#contact`)**: Contains links to my social media profiles (X, GitHub, LinkedIn) and my email address.

At the end of the body, the `script.js` file is included to add interactivity.

## CSS (`style.css`)

The `style.css` file is responsible for the visual design of the website. It uses a dark theme and a monospaced font (`Fira Code`) for a clean, modern look.

### Key Features

- **Dark Theme**: The background is a dark gray (`#1a1a1a`) and the text is a light gray (`#f0f0f0`).
- **Responsive Design**: Uses media queries to adjust the layout for smaller screens (e.g., mobile devices).
- **Animations**: Includes subtle animations like fade-ins and slide-ins to make the user experience more engaging.
- **Project Cards**: The project cards have a hover effect that makes them lift up and change color.
- **CV Download Button**: The download button has a distinct style and a hover effect.

## JavaScript (`script.js`)

The `script.js` file adds dynamic behavior to the website. It runs after the HTML document has been fully loaded (`DOMContentLoaded` event).

### Functionality

- **Dynamic Project Loading**: It defines an array of project objects, each with a `title`, `description`, and `link`. It then iterates over this array and creates a "project card" for each project, which is then appended to the project grid in the HTML. This makes it easy to add, remove, or update projects without having to modify the HTML directly.

## Icons

The `icons/` directory contains SVG (Scalable Vector Graphics) files for the social media links in the contact section. SVGs are used because they are lightweight and can be scaled to any size without losing quality.
