// This JavaScript code generates the fixed "bubbles" in the background of the page.
// These "bubbles" are just div elements styled with CSS.
// By using random generation, we can quickly create a number of bubbles, and they'll also be different each time you visit the page.

var numBubbles = 25; // How many bubbles should be generated?

$(document).ready(function () { // Wait for everything to load...
    // For the given number of bubbles...
    for (var i = 0; i < numBubbles; i++) {

        // Generate a random x and y position (as a percentage value which ranges from 0 to 100):
        
        // Math.random() generates a random float between 0 and 1
        // Then we multiply by 100 to generate a random number between 0 and 100
        // Then Math.floor is used to convert the float to an integer (whole number) - technically this isn't necessary but it cleans things up a bit.
        var randX = Math.floor(Math.random() * 100); 
        var randY = Math.floor(Math.random() * 100);

        var randD = Math.floor(Math.random() * 16 + 4); // Just a random diameter value which ranges from 4 to 20px
        
        // The actual HTML we'll be adding to the page.
        // Lots of concatenation here to generate the appropriate "bubble" given the provided x and y positions and diameter
        var bubbleHTML = "<div class='bubble' data-test=0 style='left: " + randX + "%; top: " + randY + "%; width:"+randD+"px; height:"+randD+"px;'></div>";

        // Finally, add it to the DOM
        $(".bubbles-container").append(bubbleHTML);
    }
});