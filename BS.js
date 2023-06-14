document.addEventListener("DOMContentLoaded", function() {

    $.getScript("https://code.jquery.com/jquery-3.6.0.min.js", function() {

      $.getScript("https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js", function() {
        var portfolioItem = $(".portfolio-item");
        if (portfolioItem.length > 0) {

          portfolioItem.isotope({
            itemSelector: ".item",
            layoutMode: "fitRows"
          });
          $(".portfolio-menu ul li").click(function() {
            $(".portfolio-menu ul li").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr("data-filter");
            portfolioItem.isotope({
              filter: selector
            });
            return false;
          });
        }
      });
    });
    $.getScript("https://unpkg.com/aos@2.3.1/dist/aos.js", function() {
      AOS.init();
    });
  });
const searchInput = document.getElementById('searchInput');
const gallery = document.getElementById('gallery');
const images = gallery.getElementsByTagName('img');

searchInput.addEventListener('keyup', function () {
    const searchTerm = searchInput.value.toLowerCase();

    for (let i = 0; i < images.length; i++) {
        const image = images[i];
        const tags = image.dataset.tags.toLowerCase();

        if (tags.includes(searchTerm)) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    }
}); 
