$(document).ready(function(){
    $(".taxon-container").each(function(){
        $(this).find(".double").attr("src", $(this).find(".taxon-frame img").attr("src"));
    });
    
    $(".taxon-frame").hover(function(){
        $(this).parent().addClass("hover");
        $(this).parent().find("img").addClass("bobbing");

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
    
    $(".taxon-frame").click(function(){
        var audioElement = $(this).parent().find("audio").get(0);
        
        if(!audioElement.paused && audioElement.currentTime > 0){
            audioElement.pause();
            audioElement.currentTime = 0;
        }else{
            audioElement.play();
        }
        
    });
    
    /**** AUDIO ****/
    $("audio").bind('ended pause', function(){
        $(this).parent().find("i").removeClass("audio-active");
    });
    $("audio").bind('playing', function(){
        $(this).parent().find("i").addClass("audio-active"); 
    });
});