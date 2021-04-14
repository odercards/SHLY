$(window).scroll(function() {
  // 100 = The point you would like to fade the nav in.
    

    // 第一頁
    if ($(window).scrollTop() > 800 ){
      // $('.bg').stop().animate({
      //     opacity : 0.5 
      //   }, 200 );
      $('.m01').stop().animate({
          opacity : 1
        }, 200 );
    } else {
      // $('.bg, .m01').stop().animate({
      //     opacity : 0
      //   }, 200 );		
      $('.m01').stop().animate({
          opacity : 0
        }, 200 );
    };   	
  
  
  // 第二頁
  if($(window).scrollTop() > 1600){
    $('.m02').stop().animate({
        opacity: 1
      }, 200);
  }else{
    $('.m02').stop().animate({
        opacity: 0
      }, 200 );
  };


  // 第三頁
  if($(window).scrollTop() > 2400){
    $('.m03').stop().animate({
        opacity: 1
      }, 200);
  }else{
    $('.m03').stop().animate({
        opacity: 0
      }, 200 );
  };


  // 第四頁
  if($(window).scrollTop() > 3200){
    $('.m04').stop().animate({
        opacity: 1
      }, 200);
  }else{
    $('.m04').stop().animate({
        opacity: 0
      }, 200 );
  };


  // 第五頁
  if($(window).scrollTop() > 4000){
    $('.m05').stop().animate({
        opacity: 1
      }, 200);
  }else{
    $('.m05').stop().animate({
        opacity: 0
      }, 200 );
  };
  });






  $('.scroll').on('click', function(e){		
      e.preventDefault()
      
    $('html, body').animate({
        scrollTop : $(this.hash).offset().top
      }, 1500);
  });
  











// document.querySelector(window).scroll(function() {
//   // 100 = The point you would like to fade the nav in.
//   console.log('a');
    
//     if (document.querySelector(window).scrollTop > 800 ){
//       document.querySelector('.bg').stop().animate({
//         opacity : 0.5 
//       }, 200 );
        
//       document.querySelector('.m01').stop().animate({
//         opacity : 1
//             } );
//     } else {
//       document.querySelector('.bg, .m01').stop().animate({
//         opacity : 0
//       }, 200 );		
//       document.querySelector('.m01').stop().animate({
//         opacity : 0
        
//       });
//     };   	
  
  
//   if(document.querySelector(window).scrollTop > 1600){
//     document.querySelector('.m02').stop().animate({
//       opacity: 0
//   }, 200);
    
//   }else{
//     document.querySelector('.m02').stop().animate({
//     opacity: 1
//   });
  
//   };
//     });
//   document.querySelector('.scroll').addEventListener('click', function(e){		
//       e.preventDefault()
      
//     document.querySelector('html, body').animate({
//         scrollTop : document.querySelector(this.hash).offset().top
//       }, 1500);
//   });