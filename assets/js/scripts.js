document.addEventListener( 'DOMContentLoaded', () => {

  const navbar = document.querySelector('.navbar');
  const body = document.querySelector('body');

  let navHeight = navbar.clientHeight;

  window.onscroll = function() {  
    let scroll = window.scrollY;
    if( scroll >= 250) {
      navbar.classList.add('navbarFixed');
      body.style.marginTop = navHeight+'px';
    } else if ( scroll < 200) {
      navbar.classList.remove('navbarFixed');
      body.style.marginTop = '0px';
    }
  }

  // const showImage = document.querySelector('.showImage');
  // const btnClose = document.querySelector('.btnClose');
  // const viewImage = document.querySelectorAll('#viewImage');

  // btnClose.addEventListener( 'click', ()=> {
  //   showImage.style.display = 'none';
  // });
  
});

