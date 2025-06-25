# Saad Alam's Homepage

This is the source code for my personal homepage.

## Files

### `index.html`

This is the main HTML file. It sets up the structure of the page, including the header, about me section, projects section, and contact information. It also includes a button to toggle between light and dark themes.

### `style.css`

This file contains the styling for the homepage. It uses a dark theme by default, but also includes a light theme that can be toggled. The file also contains animations and responsive design for different screen sizes.

### `script.js`

This file contains the JavaScript for the homepage. It dynamically adds the projects to the page and handles the theme toggling. The user's theme preference is saved in the local storage.

### `LebenslaufSaadAlam2025.pdf`

My CV in PDF format.

### `icons/`

This directory contains the SVG icons for the contact links. It includes both light and dark versions of the icons.

## Theme Toggle

The theme toggle button allows users to switch between a light and dark theme. The user's preference is saved in the local storage, so the theme will persist across page loads.

### Implementation

- **HTML**: A button with the ID `theme-toggle` is included in `index.html`.
- **CSS**: The `style.css` file includes a `body.light-mode` class that changes the background and text colors. It also inverts the contact icons using `filter: invert(1)` when the light mode is active.
- **JavaScript**: The `script.js` file contains the logic for the theme toggle.
  - An event listener is added to the `theme-toggle` button.
  - When the button is clicked, the `light-mode` class is toggled on the `body` element.
  - The user's theme preference ('light' or 'dark') is saved to the `localStorage`.
  - When the page loads, the script checks for a saved theme in the `localStorage` and applies it.
