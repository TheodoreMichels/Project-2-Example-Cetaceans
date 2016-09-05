var toScale = false;

$(document).ready(function () {
    $(".taxon-container").each(function () {
        $(this).find(".double").attr("src", $(this).find(".taxon-frame img").attr("src"));
        $(this).find("img").css("width", "350px");
    });

    $(".taxon-frame").hover(function () {
            $(this).parent().addClass("hover");
            $(this).parent().find("img").addClass("bobbing");

            $(this).parent().find("img").one('animationiteration webkitAnimationIteration', function () {
                $(this).addClass("bobbing");
            });
        },
        function () {
            $(this).parent().removeClass("hover");

            $(this).parent().find("img").one('animationiteration webkitAnimationIteration', function () {
                $(this).removeClass("bobbing");
            });
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

    $("#scale-button").click(function () {
        if (!toScale) {
            
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
            
            toScale = true;
        } else {
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