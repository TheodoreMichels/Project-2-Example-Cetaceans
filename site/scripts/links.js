$(document).ready(function(){
    
});

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
    
    updateCircleMask($("#circ-mask-1"), $("#cetacea"));
    updateCircleMask($("#circ-mask-2"), $("#mysticeti"));
    updateCircleMask($("#circ-mask-3"), $("#physeteridae"));
    
})
// TODO: Check screen size, make lines curve around sides on mobile
// Check element2 indicies - even goes left, odd goes right
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

function updateCircleMask(mask, element){
    var x = getElementCenter(element).x;
    var y = getElementCenter(element).y;
    
    $(mask).attr({cx: x, cy: y});
}

function getElementCenter(element){

    var x = $(element).offset().left + $(element).outerWidth(true) / 2;
    var y = $(element).offset().top + $(element).outerHeight(true) / 2;
    return{
        x: x,
        y: y
    }
}