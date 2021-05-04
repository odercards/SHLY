function index(){
  // 導航列切換
  var oMain = document.getElementById('main');
  var oBtnBox = oMain.getElementsByClassName('btn-box')[0];
  var bLeft = oBtnBox.getElementsByClassName('btn')[0];
  var bRight = oBtnBox.getElementsByClassName('btn')[1];


  for(var i=0; i<4; i++){
    var oNavBar = document.getElementById('nav-bar');
    var bNavBtn = oNavBar.getElementsByClassName("btn")[i];
    var bNavC = oNavBar.getElementsByClassName("btn");

    bNavBtn.index = i;

    oContent = oMain.getElementsByClassName('content');

    bLeft.onclick = function(){
      for(var j=0; j<4; j++){
        oContent[j].style.display = 'none';
      }
      oContent[1].style.display = 'block'
    }
    bRight.onclick = function(){
      for(var j=0; j<4; j++){
        oContent[j].style.display = 'none';
      }
      oContent[2].style.display = 'block'
    }
    bNavBtn.onclick = function(){
      for(var j=0; j<4; j++){
        oContent[j].style.display = 'none';
        // if(this.index == 0){
        //   bNavC[j].style.color = 'white';
        // }else{ 
        //   bNavC[j].style.color = 'black';
        // }
      }
      oContent[this.index].style.display = 'block';
      // startMove(oContent[this.index], {
      //   opacity: 100
      // }, 5);
    }
  }


  // 動畫
  for(var i=0; i<3; i++){
    var oAnimationBar = oMain.getElementsByClassName('animation')[0];
    var bAniBtn = oAnimationBar.getElementsByClassName("btn")[i];
    var bAniC = oAnimationBar.getElementsByClassName("btn");
    // var bNavC = oNavBar.getElementsByClassName("btn");

    bAniBtn.index = i;

    bAniBtn.onclick = function(){
      oVidBox = oAnimationBar.getElementsByClassName('video-box')[0];
      oYTload = oVidBox.getElementsByClassName('yt-lazyload');
      for(var j=0; j<3; j++){
        oYTload[j].style.display = 'none';
        bAniC[j].className = 'btn';
      }
      oYTload[this.index].style.display = 'block';
      bAniC[this.index].className = 'btn active';
    }
  }


  // 漫畫
  for(var i=0; i<4; i++){
    var oMangaBar = oMain.getElementsByClassName('manga')[0];
    var bManBtn = oMangaBar.getElementsByClassName("btn")[i];
    var bManC = oMangaBar.getElementsByClassName("btn");
    // var bNavC = oNavBar.getElementsByClassName("btn");

    bManBtn.index = i;

    bManBtn.onclick = function(){
      oManBox = oMangaBar.getElementsByClassName('manga-box')[0];
      oManP = oManBox.getElementsByClassName('mangaP');
      for(var j=0; j<4; j++){
        oManP[j].style.display = 'none';
        bManC[j].className = 'btn';
      }
      oManP[this.index].style.display = 'block';
      bManC[this.index].className = 'btn active';
    }
  }

  
}