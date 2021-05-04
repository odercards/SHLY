$(window).scroll(function() {
  // 100 = The point you would like to fade the nav in.
    var od = 1000;
  
    var aa = 1 * od;
    var bb = 2 * od;
    var cc = 3 * od;
    var dd = 4 * od;
    var ee = 5 * od;
    var ff = 6 * od;
    var gg = 7 * od;
    var hh = 8 * od;
    var ii = 9 * od;
    var jj = 10 * od;
    var kk = 11 * od;
    var ll = 12 * od;
    var mm = 13 * od;
    var nn = 14 * od;
    var oo = 15 * od;
    var pp = 16 * od;
    var qq = 17 * od;
    var rr = 18 * od;
    var ss = 19 * od;

    if($(window).scrollTop() < aa){
    // 標題
      $('.s00, .s01, .s02, .s03, .s04, .s05, .s06, .s07, .s08, .s09, .sAA, .sBB').stop().animate({
        opacity: 1
      }, 200 );
      $('.m01, .m02, .m03, .m04, .m05, .m06, .m07, .m08, .m09').stop().animate({
        opacity : 0
      }, 200 );
    } else if ($(window).scrollTop() > aa & $(window).scrollTop() < bb ){
    // 第一頁
      $('.m01, .s01').stop().animate({
        opacity : 1
      }, 200 );
      $('.s00, .m02, .s02, .m03, .s03, .s04, .s05, .s06, .s07, .s08, .s09, .s10, .s11, .s12, .s13, .s14, .s15, .s16, .sAA, .sBB').stop().animate({
          opacity: 0
      }, 200 );
    } else if ($(window).scrollTop() > bb & $(window).scrollTop() < cc ){
    // 第二頁
      $('.m02, .s02').stop().animate({
        opacity: 1
      }, 200);
      $('.m01, .s01, .m03, .s03, .m04, .s04').stop().animate({
        opacity: 0
      }, 200 );
    } else if ($(window).scrollTop() > cc & $(window).scrollTop() < dd ){
    // 第三頁
      $('.m03, .s03').stop().animate({
        opacity: 1
      }, 200);
      $('.m01, .s01, .m02, .s02, .m04, .s04, .m05, .s05').stop().animate({
        opacity: 0
      }, 200 );
    } else if ($(window).scrollTop() > dd & $(window).scrollTop() < ee ){
    // 第四頁
      $('.m04, .s04').stop().animate({
        opacity: 1
      }, 200);
      $('.m02, .s02, .m03, .s03, .m05, .s05, .m06, .s06').stop().animate({
        opacity: 0
      }, 200 );
    } else if ($(window).scrollTop() > ee & $(window).scrollTop() < ff ){
    // 第五頁
      $('.m05, .s05').stop().animate({
        opacity: 1
      }, 200);
      $('.m03, .s03, .m04, .s04, .m06, .s06, .m07, .s07').stop().animate({
        opacity: 0
      }, 200 );
    } else if ($(window).scrollTop() > ff & $(window).scrollTop() < gg ){
    // 第六頁
      $('.m06, .s06').stop().animate({
        opacity: 1
      }, 200);
      $('.m04, .s04, .m05, .s05, .m07, .s07, .m08, .s08').stop().animate({
        opacity: 0
      }, 200 );
    } else if ($(window).scrollTop() > gg & $(window).scrollTop() < hh ){
    // 第七頁
      $('.m07, .s07').stop().animate({
        opacity: 1
      }, 200);
      $('.m05, .s05, .m06, .s06, .m08, .s08, .m09, .s09').stop().animate({
        opacity: 0
      }, 200 );
    } else if ($(window).scrollTop() > hh & $(window).scrollTop() < ii ){
    // 第八頁
      $('.m08, .s08').stop().animate({
        opacity: 1
      }, 200);
      $('.m06, .s06, .m07, .s07, .m09, .s09, .mAA, .sAA').stop().animate({
        opacity: 0
      }, 200 );
    } else if ($(window).scrollTop() > ii & $(window).scrollTop() < jj ){
    // 第九頁
      $('.m09, .s09').stop().animate({
        opacity: 1
      }, 200);
      $('.m07, .s07, .m08, .s08, .mAA, .sAA, .mBB, .sBB').stop().animate({
        opacity: 0
      }, 200 );
    } else if ($(window).scrollTop() > jj & $(window).scrollTop() < kk ){
    // 第補充頁
      $('.mAA, .sAA').stop().animate({
        opacity: 1
      }, 200);
      $('.m08, .s08, .m09, .s09, .mBB, .sBB').stop().animate({
        opacity: 0
      }, 200 );
    } else if ($(window).scrollTop() > ll & $(window).scrollTop() < mm ){
    // 第參考資料頁
      $('.mBB, .sBB').stop().animate({
        opacity: 1
      }, 200);
      $('.m09, .s09, .mAA, .sAA').stop().animate({
        opacity: 0
      }, 200 );
    }






  $('.scroll').on('click', function(e){		
      e.preventDefault()
      
    $('html, body').animate({
        scrollTop : $(this.hash).offset().top
      }, 1500);
  });
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