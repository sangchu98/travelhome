$(function(){
    var imgNum = 0;

    $('#main-visual .slider img')
      .hide()
      .eq(0)
      .show();

    setInterval(function(){
        imgNum++;
        if(imgNum > 2) imgNum = 0;
      $('#main-visual .slider img')
       .fadeOut()
       .eq(imgNum)
       .fadeIn();
    }, 5000);
})
