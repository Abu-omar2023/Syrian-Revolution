$(document).ready(function(){

    $(function (){
        $(".cover").delay(700).fadeOut(2000)
    });

    // statrt saidbar

 




    // statrt saidbar
        
  
$(".begphoto .first").hover(function (){
    $(".begphoto  .first img").animate({
        width: "105%"
    
    },500)
},function (){
    $(".begphoto  .first img").animate({
        width: "100%"
    
    },500)
})
$(".begphoto .last").hover(function (){
    $(".begphoto  .last img").animate({
        width: "105%"
    
    },500)
},function (){
    $(".begphoto  .last img").animate({
        width: "100%"
    
    },500)
});

$(".saidbar ul li").hover(function (){
    $(this).animate({
        "padding-right": "20px"
    
    },200)
},function (){
    $(this).animate({
        "padding-right": "0"
    
    },200)
})
 
// start Criminals
$(".formcr").click(function () {
    $(".Criminals").fadeIn(500)
});
$(".submit").click(function () {
    $(".Criminals").delay(500).fadeOut(500);
    $(".cover").css({
        display:"none"
    })
})



// end Criminals
    $('.navbar ul li a').click(function(){
        
        $(this).addClass('links').parent().siblings().find('a').removeClass('links');
    
    });
    
   
})