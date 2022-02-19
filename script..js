var counter = 0;
$('.images img').each(function(i) {
   if (i == 0) {
       counter = 0;
   } else {
       counter++;
   }
   if (counter < 5) {
       $(this).addClass('show');
   } else {
     $(this).addClass('hide');
   }
});


function shuffleRandomLogos(remove, add) {
  const logo = $("."+remove).toArray();
  //const logo = $('.images'+remove).toArray();
  //const logo = $(".images img").toArray();
  const logoLength = logo.length;
  const randomNum = Math.floor(Math.random()*logoLength);
  const randomLogo = logo[randomNum];
  $(randomLogo).removeClass(remove);
  $(randomLogo).addClass(add);
}

window.setInterval(function(){
  // remove a cat
  shuffleRandomLogos("show", "hide");
  // display a cat
  shuffleRandomLogos("hide", "show");
}, 600);
