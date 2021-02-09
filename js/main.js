$(function () {
  $(".product__photo-tab").on("click", function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass("product__photo-tab--active");
    $($(this).parents().siblings()).removeClass(
      "product__photo-content--active"
    );

    $(this).addClass("product__photo-tab--active");
    $($(this).attr("href")).addClass("product__photo-content--active");
  });

  $(".site__navigation-btn").on("click", function () {
    $(this).toggleClass("site__navigation-btn--active");
    $(".site__navigation").toggleClass("site__navigation--active");
  });
});
