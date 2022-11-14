window.addEventListener("load", function (e) {
    // header navbar menu toggle
    $("header .activeBars").click(function () {
      $("header .activeMenuBars").slideToggle(1000);
    });
     // header navbar signin form eye show/hide password

  $("header .eyes").click(function () {
    var attr = $("header .pass input").attr("type");
    if (attr == "password") {
      $("header .pass input").attr("type", "text");
    } else {
      $("header .pass input").attr("type", "password");
    }
  });

  // header navbar signin form error Validation togirlash kerak

  $(".headerLogin button").click(function (e) {
    e.preventDefault();
    if ($(".headerLogin input").val() === "") {
      $(".errorMsg").show();
    } else {
      $(".errorMsg").hide();
    }
  });

  /// header navbar signin close

  $(".headerLogin .close").click(function () {
    $(".headerLogin").fadeOut(500);
  });

  $("header .signUp").click(function () {
    $(".headerLogin").fadeIn();
    $(".headerLogin").css("display", "flex");
  });
//   About
$(".About .close").click(function () {
    $(".About").fadeOut(500);
  });

  $(".center .cul").click(function () {
    $(".About").fadeIn();
    $(".About").css("display", "flex");
  });
  // mul
  $(".mul .owl-carousel").owlCarousel({
    items: 3,
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
    nav: true,
  });
})