$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('#topBtn').fadeIn();
        }else{
            $('#topBtn').fadeOut();
        }
    });

        $("#topBtn").click(function(){
            $('html ,body').animate({scrollTop : 2},100);
        });
});


document. getElementById("readmoreBtn1"). onclick = function () {
    location. href = "services.html";
    };
    document. getElementById("readmoreBtn2"). onclick = function () {
        location. href = "services.html";
        };
        document. getElementById("readmoreBtn3"). onclick = function () {
            location. href = "services.html";
            };
            document. getElementById("readmoreBtn"). onclick = function () {
                location. href = "services.html";
                };