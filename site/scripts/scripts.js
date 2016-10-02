var toScale = false; // A "flag" used to keep track of whether or not the species are shown to scale

$(document).ready(function () { // As usual, wait for the page to load before we try to access elements
    $(".taxon-container").each(function () {
        $(this).find(".double").attr("src", $(this).find(".taxon-frame img").attr("src"));
        $(this).find("img").css("width", "350px");
    });

    $(".taxon-frame").hover(
        function () {
            $(this).parent().addClass("hover");
        },
        function () {
            $(this).parent().removeClass("hover");
        });

    $(".taxon-frame").click(function () {
        var audioElement = $(this).parent().find("audio").get(0);

        if (!audioElement.paused && audioElement.currentTime > 0) {
            audioElement.pause();
            audioElement.currentTime = 0;
        } else {
            audioElement.play();
        }

    });

    /**** CHANGING SCALE ****/
    // Lots of more complex stuff going on here. Check it out for something more advanced.
    $("#scale-box").click(function () {
        if (!toScale) { // if species are NOT already to scale...
            
            // We need to do something slightly different for each species, so we use an "each" loop to look through all of them
            $(".taxon-container").each(function () {

                var container = $(this);

                var scale = $(this).find(".taxon-frame").find("img").attr("data-size");
                $(this).find(".taxon-frame").find("img").fadeOut("fast", function () {
                    container.find(".frame-box").find("img").animate({
                        "width": scale * 10
                    }, 500, 'linear');                    
                    
                });

                $(this).find(".frame-box").addClass("shown");

                $(this).find(".taxon-frame").addClass("faded");

            });
            
            toScale = true; // They are now to scale.
            
            $("#scale-text-1").fadeOut("normal", function(){
                $("#scale-text-2").fadeIn("normal");
            });
        
        } else { // If species ARE already to scale
            $(".taxon-container").each(function () {

                var container = $(this);

                container.find(".taxon-frame").removeClass("faded");

                
                
                $(this).find(".frame-box").find("img").animate({
                    "width": "350px"
                }, 500, 'linear', function () {

                    setTimeout(function () {
                        container.find(".frame-box").removeClass("shown");

                        container.find(".taxon-frame").find("img").fadeIn("fast");
                    }, 300);

                });

            });

            toScale = false;
            
            $("#scale-text-2").fadeOut("normal", function(){
                $("#scale-text-1").fadeIn("normal");
            });
        }

    });

    /**** AUDIO ****/
    $("audio").bind('ended pause', function () {
        $(this).parent().find("i").removeClass("audio-active");
    });
    $("audio").bind('playing', function () {
        $(this).parent().find("i").addClass("audio-active");
    });
});