const vid = document.getElementById("background");
vid.playbackRate = 0.3;

window.addEventListener("scroll", throttle(parallax, 14));

function throttle(fn, wait) {
  var time = Date.now();
  return function () {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
}

let bgcontainer = document.getElementById("bgcontainer");

function parallax() {
    let scrolled = window.pageYOffset;
    let coords = ( -20 + Math.E ** (-1 * (0.005 * (scrolled - 600)))) + 'vw'
    bgcontainer.style.transform = 'translateY(' + coords + ')';
    console.log(bgcontainer.style.transform)
    console.log(scrolled)
}
