$(document).ready(function () {
   // $('.main_menu_wrap>ul>li').mouseover(function(){
   //    var a = $(this).index();
 
   //    $('.sub_menu_wrap').eq(a).toggleClass('on');
 
   //    if($('.sub_menu_wrap').eq(a).hasClass('on')){
   //       $('.sub_menu_wrap').eq(a).css({display:'block'})
   //    }else{
   //       $('sub_menu_wrap').eq(a).css({display:'none'})
   //    }
 
   // });
 
   // $(".main_menu_wrap>ul>li").mouseenter(function () {
   //   var a = $(this).index();
 
   //   $(".sub_menu_wrap:eq(" + a + ")").css({
   //     display: "block",
   //   });
 
   //   $(".sub_menu_wrap:not(:eq(" + a + "))").css({
   //     display: "none",
   //   });
   // });
 
   // $(".sub_menu_wrap").mouseleave(function () {
   //   $(".sub_menu_wrap").css({
   //     display: "none",
   //   });
   // });

   

   $('.main_menu_wrap>ul>li').mouseenter(function(){
      var a = $(this).index();

      $('.sub_menu_wrap:eq('+ a +')').css({
         display:'block'
      });

      $('.sub_menu_wrap:not(:eq('+ a +'))').css({
         display:'none'
      });

   });

   $('.sub_menu_wrap').mouseleave(function(){
      $(this).css({
         display:'none'
      });
   });

   


   
  
   

   $('.search_box').click(function(){
      $(this).toggleClass('btn');

      if($('.search_box').hasClass('btn')){
         $('img',this).attr({
            src:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0iIzMzMyI+PHBhdGggY2xhc3M9InN0MCIgZD0iTTEzLjE2IDEyLjQ1TDguMjEgNy41bDQuOTUtNC45NS0uNzEtLjcxTDcuNSA2Ljc5IDIuNTUgMS44NGwtLjcxLjcxTDYuNzkgNy41bC00Ljk1IDQuOTUuNzEuNzFMNy41IDguMjFsNC45NSA0Ljk1eiIvPjwvc3ZnPg=='
         });

         $('#hidden_search_wrap').css({
            display:'block',
         });

         $('.hidden_search_box').css({
            border:'2px solid #81b1e7'
         });

      }else{
         $('img',this).attr({
            src:'main_img/search_icon.png'
         });

         $('#hidden_search_wrap').css({
            display:'none'
         });

         $('.hidden_search_box').css({
            border:'none'
         });
      }

      

   });



 });