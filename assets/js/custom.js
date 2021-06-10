(function ($) {


  $(".hover").mouseleave(function () {
    $(this).removeClass("hover");
  });

  $(".isotope-wrapper").each(function () {
    var $isotope = $(".isotope-box", this);
    var $filterCheckboxes = $('input[type="radio"]', this);

    var filter = function () {
      var type = $filterCheckboxes.filter(":checked").data("type") || "*";
      if (type !== "*") {
        type = '[data-type="' + type + '"]';
      }
      $isotope.isotope({ filter: type });
    };

    $isotope.isotope({
      itemSelector: ".isotope-item",
      layoutMode: "masonry",
    });

    $(this).on("change", filter);
    filter();
  });

  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
  });
})(jQuery);


var showSection = function showSection(section, isAnimate) {
  var direction = section.replace(/#/, ""),
    reqSection = $(".section").filter('[data-section="' + direction + '"]'),
    reqSectionPos = reqSection.offset().top - 0;

  if (isAnimate) {
    $("body, html").animate(
      {
        scrollTop: reqSectionPos,
      },
      800
    );
  } else {
    $("body, html").scrollTop(reqSectionPos);
  }
};

var checkSection = function checkSection() {
  $(".section").each(function () {
    var $this = $(this),
      topEdge = $this.offset().top - 80,
      bottomEdge = topEdge + $this.height(),
      wScroll = $(window).scrollTop();
    if (topEdge < wScroll && bottomEdge > wScroll) {
      var currentId = $this.data("section"),
        reqLink = $("a").filter("[href*=\\#" + currentId + "]");
      reqLink.closest("li").addClass("active").siblings().removeClass("active");
    }
  });
};

$(".main-menu").on("click", "a", function (e) {
  e.preventDefault();
  showSection($(this).attr("href"), true);
});

$(window).scroll(function () {
  checkSection();
});
