# PRODIGY_WD_01
Responsive Landing Page
# Interactive Navigation Menu

This project aims to create an interactive navigation menu using HTML, CSS, and JavaScript. The navigation menu is designed to have a fixed position and be visible on all pages of a website. It includes features such as changing color or style when scrolled or when hovering over a menu item.

## Features

- **Fixed Position**: The navigation menu remains fixed at the top of the page, ensuring it is always visible to users.
- **Responsive Design**: The menu is designed to adapt to different screen sizes for a seamless user experience across devices.
- **Color and Style Changes**: The menu changes color or style dynamically based on user interactions, such as scrolling or hovering over menu items.
- **Smooth Scroll**: Clicking on menu items smoothly scrolls the page to the corresponding section.
- **Active Section Highlighting**: The menu highlights the current section as the user scrolls through the page.
- **Readable Font Colors**: The font colors are carefully chosen to ensure readability, especially against a white background.

## Technologies Used

- **HTML**: Used for structuring the navigation menu and defining the layout of the webpage.
- **CSS**: Utilized for styling the navigation menu, including colors, fonts, and layout.
- **JavaScript**: Implemented to add interactivity to the navigation menu, such as changing colors and handling smooth scrolling.

## How to Use

To integrate this interactive navigation menu into your website, follow these steps:

1. Copy the HTML structure for the navigation menu and paste it into your HTML file.
2. Include the provided CSS file in your project to style the navigation menu.
3. Add the provided JavaScript code to your project to enable interactivity and functionality.
4. Customize the menu items, colors, fonts, and styles to match your website's design and branding.
5. Test the navigation menu to ensure it functions correctly and provides a seamless user experience.

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interactive Navigation Menu</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Navigation Menu -->
  <nav id="navbar">
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <!-- Content Sections -->
  <section id="home">
    <!-- Home Content -->
  </section>
  <section id="about">
    <!-- About Content -->
  </section>
  <section id="skills">
    <!-- Skills Content -->
  </section>
  <section id="portfolio">
    <!-- Portfolio Content -->
  </section>
  <section id="contact">
    <!-- Contact Content -->
  </section>

  <script src="script.js"></script>
</body>
</html>





