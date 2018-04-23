/*
var title = document.getElementsByClassName('creative-menu-button'),
    cont = document.getElementsByClassName('creative-menu-cont');


for (var i = 0; i < title.length; i++) {
  title[i].addEventListener('click', function() {
    for(!(this.classList.contains('active'))) {
      title[i].classList.remove('active');
    }
    this.classList.add('active');
  })
}
*/

$(document).ready(function () {
  $('.creative-menu>.creative-menu-cont').not(':first').hide();
  $('.creative-menu>.creative-menu-title').click(function() {
    let findCont = $(this).next('.creative-menu-cont');
    let findMenu = $(this).closest('.creative-menu');
    // let findArr = $(this).next('.fa-caret-right');
    if (findCont.is(':visible')) {
      findCont.slideUp();
      // findArr.toggleClass('.active');
    }else {
      findMenu.find('>.creative-menu-cont').slideUp();
      findCont.slideDown();
      // findArr.toggleClass('.active', false);
    }
  });
});


