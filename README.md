# Personal Homepage

This is a personal homepage for Saad Alam, a Physics student at TUM. It is designed to be a clean, minimal, and modern showcase of his work and interests.

## Project Structure

The project is structured as follows:

- `index.html`: This is the main HTML file that contains the structure of the homepage. It is divided into four sections: About Me, Projects, and Contact.
- `style.css`: This file contains all the styles for the homepage. It is responsible for the layout, colors, fonts, and animations.
- `script.js`: This file contains the JavaScript code for the homepage. It is responsible for dynamically adding the projects to the project grid.
- `icons/`: This directory contains the SVG icons for the contact section.

## Design

The design of the homepage is based on the following principles:

- **Minimalism**: The design is clean and simple, with a focus on the content.
- **Dark Mode**: The homepage uses a dark color scheme, which is easy on the eyes and gives the site a modern look.
- **Monospace Font**: The homepage uses the 'Fira Code' monospace font, which gives the site a technical feel.
- **Responsive**: The homepage is responsive, which means it looks good on all devices, from desktops to mobile phones.
- **Animations**: The homepage uses subtle animations to make the site more dynamic and engaging.

## Customization

The homepage can be easily customized to your liking. Here are some of the things you can change:

- **Title**: To change the title of the homepage, edit the `<title>` tag in `index.html`.
- **Name and Subtitle**: To change the name and subtitle in the header, edit the `<h1>` and `<p>` tags in `index.html`.
- **About Me**: To change the content of the About Me section, edit the `<p>` tag in the `<section id="about">`.
- **Projects**: To add or remove projects, edit the `projects` array in `script.js`. Each project is an object with a `title`, `description`, and `link`.
- **Contact**: To change the contact email, edit the `href` attribute of the `<a>` tag in the `<section id="contact">`. To add your social media links, replace the `href` value in each `<a>` tag with your profile URL.
- **Colors**: To change the colors of the homepage, edit the CSS variables in `style.css`. The `--primary-color` variable controls the accent color, and the `--background-color` and `--text-color` variables control the background and text colors, respectively.
- **Fonts**: To change the fonts of the homepage, edit the `font-family` property in `style.css`.