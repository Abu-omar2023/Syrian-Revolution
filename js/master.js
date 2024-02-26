$(document).ready(function(){

    $(function (){
        $(".cover").delay(700).fadeOut(2000)
    })
        
  
$(".begphoto .first").hover(function (){
    $(".begphoto  .first img").animate({
        width: "110%"
    
    },500)
},function (){
    $(".begphoto  .first img").animate({
        width: "100%"
    
    },500)
})
$(".begphoto .last").hover(function (){
    $(".begphoto  .last img").animate({
        width: "110%"
    
    },500)
},function (){
    $(".begphoto  .last img").animate({
        width: "100%"
    
    },500)
})
 
// $(".begphoto .first").lave(function (){
//     $(".begphoto  .first img").animate({
//         width: "100%"
    
//     },500)
// })

    $('.navbar ul li a').click(function(){
        
        $(this).addClass('links').parent().siblings().find('a').removeClass('links');
    
    });
    
   
})