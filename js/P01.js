$(document).ready(function(){

    $(".visual .btn a").on('mouseenter', function() {
        $(this).find("img").attr("src", $(this).find("img").attr("src").replace(".png","_w.png"));
    }).on('mouseleave', function() {
        $(this).find("img").attr("src", $(this).find("img").attr("src").replace("_w.png",".png"));
    });

    visualImg()
});

$(window).resize(function(){
    visualImg()
});

function visualImg(){
    $(".visual .slick-slide").each(function() {
        var currentStyle = $(this).attr("style");
        var pcImage = "_pc.jpg";
        var moImage = "_m.jpg";
        if (window.innerWidth > 980) {  
            $(this).attr("style", currentStyle.split(moImage).join(pcImage));
        } else{ 
            $(this).attr("style", currentStyle.split(pcImage).join(moImage));
        }

    });
}