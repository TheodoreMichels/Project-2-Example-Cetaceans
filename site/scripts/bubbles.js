var numBubbles = 25;

$(document).ready(function () {
    for (var i = 0; i < numBubbles; i++) {

        var randX = Math.floor(Math.random() * 100);
        var randY = Math.floor(Math.random() * 100);

        var randD = Math.floor(Math.random() * 16 + 4);
        
        var bubbleHTML = "<div class='bubble' data-test=0 style='left: " + randX + "%; top: " + randY + "%; width:"+randD+"px; height:"+randD+"px;'></div>";

        $(".bubbles-container").append(bubbleHTML);
    }
});