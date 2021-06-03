$(document).ready(function(){
    likebutton();
});


function likebutton(){
    

    $(".like").click(function(){
        var likecount = 0;
        likecount++
        console.log(likecount);
        $(this).find(".like-count").html(likecount);
        $(this).addClass("liked");
    });
}













