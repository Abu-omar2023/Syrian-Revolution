$(document).ready(function(){

    $(function (){
        $(".cover").delay(700).fadeOut(1500)
    })
        
  

 


    $('.navbar ul li a').click(function(){
        
        $(this).addClass('links').parent().siblings().find('a').removeClass('links');
    
    });
    
   
})