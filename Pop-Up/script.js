$(document).ready(function(){
    var flag = false;

       $('.clicks').on('click',function(){
           if(flag == false){
               $('#box').addClass('show');
               flag = true;
           }

           else{
               $('#box').removeClass('show');
               flag = false; 
           }

           
       })
   
       $('.submission').on('click',function(){
           $('#box').removeClass('show');
       });

   
       $('.closeBtn').on('click',function(){
           $('#box').removeClass('show');
       })
       
   });