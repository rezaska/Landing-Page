/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


function makeActive() {
    for (const section of sections) {
      const box = section.getBoundingClientRect();
      // You can play with the values in the "if" condition to further make it more accurate. 
      if (box.top <= 150 && box.bottom >= 150) {
        // Apply active state on the current section and the corresponding Nav link.
      } else {
        // Remove active state from other section and corresponding Nav link.
      }
    }
}


// build the nav

var link = document.createElement('a');
link.classList.add('menu__link');
link.href = '#section1';
link.textContent = 'Section 1';
document.getElementById('navbar__list').appendChild(link);

var link = document.createElement('a');
link.classList.add('menu__link');
link.href = '#section2';
link.textContent = 'Section 2';
document.getElementById('navbar__list').appendChild(link);

var link = document.createElement('a');
link.classList.add('menu__link');
link.href = '#section3';
link.textContent = 'Section 3';
document.getElementById('navbar__list').appendChild(link);

var link = document.createElement('a');
link.classList.add('menu__link');
link.href = '#section4';
link.textContent = 'Section 4';
document.getElementById('navbar__list').appendChild(link);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click


// Set sections as active

document.addEventListener("scroll", function() {
    makeActive();
  });
