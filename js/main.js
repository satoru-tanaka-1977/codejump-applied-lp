$(function () {
  // ハンバーガーメニュー

  $(".hamburger").on("click", function () {
    hamburger();
  });

  $("#navi a").on("click", function () {
    hamburger();
  });

  // Inview（画面に表示されたタイミングで処理を実行）

  //   スライド左
  $(".inview-slide-left").on(
    "inview",
    function (event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        $(this).stop().addClass("slide-left");
      }
    },
  );

  //   スライド右

  $(".inview-slide-right").on(
    "inview",
    function (event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        $(this).stop().addClass("slide-right");
      }
    },
  );

  //   ふきだし

  $(".inview-balloon").on(
    "inview",
    function (event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        $(this).stop().addClass("balloon");
      }
    },
  );
});

// ハンバーガー処理

function hamburger() {
  $(".hamburger").toggleClass("active");

  if ($(".hamburger").hasClass("active")) {
    $("#navi").addClass("active");
  } else {
    $("#navi").removeClass("active");
  }
}
