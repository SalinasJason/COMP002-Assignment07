// 1. Create a page that displays a balloon (using the balloon emoji, 🎈). When you press
// the up arrow, it should inflate (grow) 10 percent, and when you press the down arrow,
// it should deflate (shrink) 10 percent. You can control the size of text (emoji are
// text) by setting the font-size CSS property (style.fontSize) on its parent element.
// Remember to include a unit in the value—for example, pixels (10px). The key names of
// the arrow keys are "ArrowUp" and "ArrowDown". Make sure the keys change only the
// balloon, without scrolling the page.
// When that works, add a feature where, if you blow up the balloon past a certain size,
// it explodes. In this case, exploding means that it is replaced with a 💥 emoji, and
// the event handler is removed (so that you can’t inflate or deflate the explosion).
// Hint: keeping track of the size in percentage might be easier.
// Hint: Make sure you quote the emoji characters. They are strings, after all.
// Hint: document.getElementById("balloon") will get the balloon element on the page.

let balloon = document.getElementById('balloon'); // Declaring a variable name ballon and using getElementById to find the html element.
let fontSize = 20; // Declaring a variable name fontSize and assigning the value 20.

document.addEventListener('keydown', function(event) { // Adding a eventlistener "keydown" and event handler.
    console.log('Key pressed:', event.key); // console logs the key that was pressed.
    console.log('Event details:', event); // console logs the event details.
    if (event.key === 'ArrowUp') { // Checks if ArrowUp key is pressed.
        fontSize *= 1.10; // Increase size by 10%, its multiplying the fontSize value which is 20 by 1.10 and returns the new value then continues to multiply the new value by 1.10 every time the up arrow key is pressed.
        balloon.style.fontSize = fontSize + 'px'; // Sets the ballon element to the new value 22px.
      } 
      
      else if (event.key === 'ArrowDown') { // Checks if ArrowDown key is pressed.
        fontSize *= 0.90; // Decrease size by 10%, its multiplying the fontSize value 20 by 0.90 and returns the new value then continues to multiply the new value by 0.90 every time the down arrow key is pressed..
        balloon.style.fontSize = fontSize + 'px'; // Sets the ballon element to the new value 18px
      }

      if (fontSize > 200) { // If the fontSize is greater than 200px run the next code.
        balloon.textContent = '💥'; // If it's true then replace the ballon (🎈) with an explosion (💥).
        document.removeEventListener('keydown', arguments.callee); // It removes the event handler and prevents the explosion (💥) from growing and shrinking.
      }
});



// 2. The index.html page has a tabbed layout. Make the default state of the layout show
// the first tab, and make it so that when you click the links at the top the correct
// tab's contents are displayed and the others are hidden. Prevent the default action of
// the links and set up an event listener with the logic necessary to make the tabs
// function as expected. There are many ways to accomplish this task, but you will need
// to at minimum add listeners to each link and toggle the display of the tab contents.
// Hint: display: none; hides an element, and display: block; will bring it

document.addEventListener('DOMContentLoaded', function() { // Added a event listener that triggers when the html content is completely loaded.
  
    let tab1Link = document.getElementById('tab1Link'); // Declaring a variable name tab1Link and using getElementById to find the html element.
    let tab2Link = document.getElementById('tab2Link'); // Declaring a variable name tab2Link and using getElementById to find the html element.
    let tab3Link = document.getElementById('tab3Link'); // Declaring a variable name tab3Link and using getElementById to find the html element.
  
    let tab1 = document.getElementById('tab1'); // Declaring a variable name tab1 and using getElementById to find the html element.
    let tab2 = document.getElementById('tab2'); // Declaring a variable name tab2 and using getElementById to find the html element.
    let tab3 = document.getElementById('tab3'); // Declaring a variable name tab3 and using getElementById to find the html element.
  
  
    let tabs = [tab1Link, tab2Link, tab3Link];  // Store the tab links in an array for easy iteration.
  
   
    let contents = [tab1, tab2, tab3]; // Store the tab contents in an array for easy iteration.

   
  function hideAllTabs() { // Function to hide all tab contents by setting their display to 'none'.
    contents.forEach(content => { // Loop through each tab content element.
      content.style.display = 'none'; // Hide the content element by setting its display property to 'none'.
    });
  }
  
  function showTab(tabId) { // Function to show a specific tab content by its ID.
    hideAllTabs(); // Hide all tabs first.
    document.getElementById(tabId).style.display = 'block'; // Display the specified tab content.
  }

  showTab('tab1'); // Set the default tab to be visible (the first tab).

  // Add click event listeners to each tab link.
  tabs.forEach(tab => { // Start iterating over each element in the `tabs` array
    tab.addEventListener('click', function(event) { // Adding a 'click' event listener to each tab link element
      event.preventDefault(); // Prevents the default link behavior (stops the page from navigating).
      let tabId = this.id.replace('Link', ''); // Extracts the tab ID from the link ID ('tab1Link' becomes 'tab1').
      showTab(tabId); // Shows the matching tab content.
    });
  });
});
  
  