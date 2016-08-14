$(document).ready(function(){
    $(".taxon-frame").hover(function(){
        console.log("hover");
        $(this).parent().addClass("hover");
        $(this).parent().find("img").addClass("bobbing");
        //$(this).parent().find("img").unbind("one"); // Doesn't work
        $(this).parent().find("img").one('animationiteration webkitAnimationIteration', function() {
            $(this).addClass("bobbing");
        });
    },
    function(){
        $(this).parent().removeClass("hover");
        
        $(this).parent().find("img").one('animationiteration webkitAnimationIteration', function() {
            $(this).removeClass("bobbing");
        });
    });
});