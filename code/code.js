$(document).ready(function(){
    $('#myBtn').click(function(){
       window.scrollTo({
           top: 0,
           behavior: 'smooth'
       })
    })
})
$(document).ready(function(){
    var number = $('.content-Finished .col-5').length;
    if(number>=8){
        $('.next-slide-nav').css('display','block')
    }
})
window.onscroll = function() {myFunction()};
function myFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    $('#myBtn').css('display','block');
    $('header').css('background-color','#f6f7f8');
}
else{
    $('#myBtn').css('display','none');
    $('header').css('background-color','transparent');
}
}
$(document).ready(function(){
    let total = $('.content-Finished .col-5').length;
    let drive = (total/4).toFixed(2)
    var slideTime = 0;
        $(document).on('click','.move-next',function(){
            slideTime+=Math.round(((drive)*100)/(total/2))
            if(slideTime >=100){ 
                slideTime = 100;            
            }
            $('.content-Finished .row').css('transform',`translate3d(-${slideTime}%,0px,0px)`)
               $('.move-next').css('opacity',1) 
               $('.move-prev').css('opacity',0.5) 
            })
            $(document).on('click','.move-prev',function(){
                slideTime = 0
                $('.content-Finished .row').css('transform',`translate3d(0px,0px,0px)`)
                $('.move-next').css('opacity','0.5') 
                $('.move-prev').css('opacity','1') 
            })
        }) 