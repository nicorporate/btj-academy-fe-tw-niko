$(".logo").ready(function () {
  $("#welcome").click(function () {
    alert("Hi, Selamat Datang!");
  });
});

$("#profile").mouseenter(function () {
  $(this).css("background-color", "black");

  // mouseleave: function () {
  //   $(this).css("background-color", "lightblue");
  // },
  // click: function () {
  //   $(this).css("background-color", "yellow");
  // },
});

$(document).ready(function () {
  let rotationDegree = 0;

  function rotateImage() {
    rotationDegree += 360;
    $("#rotating-image").css("transform", "rotate(" + rotationDegree + "deg)");
  }

  $("#rotating-image").click(rotateImage);
});

$(document).ready(function () {
  var options = {
    strings: ["Niko Aji Nugroho", "I am Niko Aji Nugroho"],
    typeSpeed: 75,
    backSpeed: 75,
    loop: true,
  };

  var typed = new Typed("#nama-niko", options);
});

$(document).ready(function () {
  function showCardFromSide() {
    $("#cards").animate(
      {
        marginTop: "100px",
        opacity: 1,
      },
      5000
    );
  }
  showCardFromSide("left-content");
  showCardFromSide("right-content");
});
