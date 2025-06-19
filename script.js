// Feature flags
const ffCtaActive = true;
// ---- //

const hero = document.getElementById("top");
const heroHeight = hero ? hero.offsetHeight : 0;
const header = document.querySelector("header");
const headerHeight = header ? header.offsetHeight : 0;

document.addEventListener("DOMContentLoaded", function () {
  const top = document.getElementById("toTop");
  const hamburger = document.getElementById("mobile-hamburger");
  const nav = document.getElementById("nav");

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

    if (top) {
      if (topDistance > heroHeight - headerHeight) {
        top.classList.add("top-enable");
      } else {
        top.classList.remove("top-enable");
      }
    }
  });

  hamburger.addEventListener("click", function (e) {
    e.stopPropagation();
    nav.classList.toggle("menu-visible");
  });

  document.addEventListener("click", function (e) {
    if ((nav.contains(e.target) && e.target.tagName === "A") || (!nav.contains(e.target) && !hamburger.contains(e.target))) {
      nav.classList.remove("menu-visible");
    }
  });
});

// History section
const historyList = document.getElementById("historyList");
const historyData = fetch("history.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      let yearRange;
      if (item.startYear === item.endYear) {
        yearRange = item.startYear;
      } else {
        yearRange = `${item.startYear} - ${item.endYear}`;
      }
      const position = document.createElement("p");
      position.innerHTML = `<strong>${item.organization}</strong> ${item.role} <em>${yearRange}</em>`;
      historyList.appendChild(position);
    });
  })
  .catch((error) => console.error("Error loading history data:", error));

// CTA
const cta = document.getElementById("cta");
const ctaClose = document.getElementById("ctaBtnClose");
const ctaLink = document.getElementById("ctaBtnLink");
const ctaURL = "http://www.fiverr.com/s/bdwq69a";

if (ffCtaActive) {
  if (sessionStorage.getItem("ctaShown") == null) {
    cta.style.display = "block";
    sessionStorage.setItem("ctaShown", true);
  }

  ctaClose.addEventListener("click", function (e) {
    e.stopPropagation();
    cta.style.display = "none";
    sessionStorage.setItem("ctaShown", true);
  });

  ctaLink.addEventListener("click", function (e) {
    e.stopPropagation();
    window.open(ctaURL, "_blank");
    cta.style.display = "none";
    sessionStorage.setItem("ctaShown", true);
  });
}
