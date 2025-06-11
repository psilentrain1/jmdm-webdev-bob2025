window.addEventListener("scroll", function (event) {
  const topDistance = this.window.pageYOffset;
  const layers = this.document.querySelectorAll("[data-type='parallax']");

  for (layer of layers) {
    const depth = layer.getAttribute("data-depth");
    const movement = -(topDistance * depth);
    const translate3d = "translate3d(0, " + movement + "px, 0)";
    layer.style["-webkit-transform"] = translate3d;
    layer.style["-moz-transform"] = translate3d;
    layer.style["-ms-transform"] = translate3d;
    layer.style["-o-transform"] = translate3d;
    layer.style.transform = translate3d;
  }
});
