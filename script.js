const hero = document.getElementById("hero");
const heroHeight = hero ? hero.offsetHeight : 0;
const header = document.querySelector("header");
const headerHeight = header ? header.offsetHeight : 0;

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function (event) {
    const topDistance = this.window.pageYOffset;
    const layers = this.document.querySelectorAll("[data-type='parallax']");

    for (let layer of layers) {
      const depth = layer.getAttribute("data-depth");
      const movement = -(topDistance * depth);
      const translate3d = "translate3d(0, " + movement + "px, 0)";
      layer.style["-webkit-transform"] = translate3d;
      layer.style["-moz-transform"] = translate3d;
      layer.style["-ms-transform"] = translate3d;
      layer.style["-o-transform"] = translate3d;
      layer.style.transform = translate3d;
    }

    if (header) {
      if (topDistance > heroHeight - headerHeight) {
        header.classList.add("header-bg");
      } else {
        header.classList.remove("header-bg");
      }
    }
  });
});
