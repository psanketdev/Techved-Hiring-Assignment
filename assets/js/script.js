/*Author: */


window.onload = function () {
  let tabLinks = Array.from(document.querySelectorAll('.tab-links li a'));
  let images = Array.from(document.querySelectorAll('.gallery-img .tab-img'));

  tabLinks.forEach((links) => {
    links.addEventListener('click', () => {

      // here we remove the active class to each tab-links
      tabLinks.forEach((link) => {
        link.classList.remove('active');
      })
      links.classList.add('active');
      let target = links.getAttribute('data-target');

      images.forEach((img) => {
        let id = img.getAttribute('data-id');

        if (target == id) {
          img.style.display = 'block';
        } else if (target == 'all') {
          img.style.display = 'block';
        } else {
          img.style.display = 'none';
        }

        if (target == 'video') {
          img.style.width = 'initial';
        }

      })
    });
  })
}






