// If you're already confused enough by JavaScript, it's probably best that you just avoid this page for now. I got a bit carried away.

// However, if you're interested, this script is used to draw the "Bezier curves" between the different "nodes" on the page.

// Note that all of this needs to happen when the page loads AND when the window is resized.
// Otherwise, the connections would simply draw, and then stay in the same position regardless of the window size
$(window).on("load resize", function(){
    updateLink($("#cetacea"), $("#mysticeti"), $("#path1"));
    updateLink($("#cetacea"), $("#odontoceti"), $("#path2"));
    updateLink($("#mysticeti"), $("#balaenopteridae"), $("#path3"));
    updateLink($("#mysticeti"), $("#balaenidae"), $("#path4"));
    updateLink($("#mysticeti"), $("#cetotheriidae"), $("#path5"));
    updateLink($("#odontoceti"), $("#physeteridae"), $("#path6"));
    updateLink($("#odontoceti"), $("#dolphins"), $("#path7"));
    updateLink($("#mysticeti"), $("#eschrichtiidae"), $("#path8"));
    updateLink($("#odontoceti"), $("#ziphiidae"), $("#path9"));
    updateLink($("#odontoceti"), $("#phocoenidae"), $("#path10"));
    
})

function updateLink(element1, element2, path){
    var startX = getElementCenter(element1).x;
    var startY = getElementCenter(element1).y + ($(element1).outerHeight() + 100) / 2.0;
    
    var endX = getElementCenter(element2).x;
    var endY = getElementCenter(element2).y - $(element2).outerHeight() / 2.0;
    
    var yDist = endY - startY;
    
    var aX = startX;
    var aY = startY + yDist*0.45;
    
    var bX = endX;
    var bY = endY - yDist*0.45;

    var d = "M "+startX+" "+startY+" C "+aX+" "+aY+","+bX+" "+bY+","+endX+" "+endY;
    $(path).attr("d", d);
}

// A simple function used to get the center of a given element on the page (used as a subroutine above).
function getElementCenter(element){
    // Get the element's position from the left side of the screen, and add half of its width to this value, in order to get the center on the x axis
    var x = $(element).offset().left + $(element).outerWidth(true) / 2;
    // Get the element's position from the top of the screen, and add half of its height to this value, in order to get the center on the y axis
    var y = $(element).offset().top + $(element).outerHeight(true) / 2;
    // Return both the x and y values as an object
    return{
        x: x,
        y: y
    }
}