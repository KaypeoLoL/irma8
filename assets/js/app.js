
  var userFeed = new Instafeed({
      get: 'user',
      userId: '1192556527',
      sortBy: 'most-recent',
<<<<<<< HEAD
      limit: 6,
=======
      limit: 8,
>>>>>>> gh-pages
      resolution:'standard_resolution',
      template: '<a href="{{link}}"><img src="{{image}}"/></a>',
      accessToken: '1192556527.8d20f7f.8215c81b80284d5192f79dbce618c7f8'
  });
  userFeed.run();

function renderGrid() {
  var blocks = document.getElementsByClassName("editorial");
  var pad = 30, cols = 3, newleft, newtop;

  for(var i = 1; i < blocks.length; i++){
    if(i % cols == 0){
      newtop = (blocks[i-cols].offsetTop + blocks[i-cols].offsetHeight) + pad;
      blocks[i].style.top = newtop+"px";
    } else {
      if(blocks[i-cols]){
        newtop = (blocks[i-cols].offsetTop + blocks[i-cols].offsetHeight) + pad;
        blocks[i].style.top = newtop+"px";
      }
      newleft = (blocks[i-1].offsetLeft + blocks[i-1].offsetWidth) + pad;
      blocks[i].style.left = newleft+"px";
    }
  }
};
/*
window.addEventListener("load", renderGrid, false);
window.addEventListener("resize", renderGrid, false);
*/
