$(document).ready(function(){

    $(window).scroll(function(){
        if($(window).scrollTop() >= $('.begphoto').offset().top){
            $('.scrool').fadeIn()
        }
        else{
            $('.scrool').fadeOut()
        }
       });
       $('.scrool').click(function(){
        $('html, body').animate({
            scrollTop : 0
        },700)
       });

    $(function (){
        $(".cover").delay(700).fadeOut(2000)
    });

    // statrt saidbar

 




    // statrt saidbar
        
  
$(".begphoto .first").hover(function (){
    $(".begphoto  .first img").animate({
        width: "102%"
    
    },500)
},function (){
    $(".begphoto  .first img").animate({
        width: "100%"
    
    },500)
});
$(".begphoto .last").hover(function (){
    $(".begphoto  .last img").animate({
        width: "102%"
    
    },500)
},function (){
    $(".begphoto  .last img").animate({
        width: "100%"
    
    },500)
}); 

// start smalphoto  




// end smalphoto

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
});

$(".Criminals span").click(function () {
    $(".Criminals").fadeOut(500);
   
});



// end Criminals

// start Criminals2
$(".formcr2").click(function () {
    $(".Criminals2").fadeIn(500)
});
$(".submit").click(function () {
    $(".Criminals2").delay(500).fadeOut(500);
    $(".cover").css({
        display:"none"
    })
});

$(".menu-b").click(function () {
    $(".formcr2").fadeIn(500);
  
});

menu-b

$(".Criminals2 span").click(function () {
    $(".Criminals2").fadeOut(500);
   
});




// end Criminals2


    $('.navbar ul li a').click(function(){
        
        $(this).addClass('links').parent().siblings().find('a').removeClass('links');
    
    });
    
   
})