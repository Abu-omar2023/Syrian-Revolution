$(document).ready(function(){

    $(function (){
        $(".cover").delay(700).fadeOut(2000)
    })
        
  

 


    $('.navbar ul li a').click(function(){
        
        $(this).addClass('links').parent().siblings().find('a').removeClass('links');
    
    });
    
   
})