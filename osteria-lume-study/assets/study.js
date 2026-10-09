// Shared behavior for both study pages. Nothing here differs between versions.
(function () {
  var cfg = window.STUDY || {};
  var group = document.body.getAttribute("data-group") || "";

  // 1) Survey bar: appears after the same delay on both versions.
  var bar = document.getElementById("surveyBar");
  var link = document.getElementById("surveyLink");
  if (cfg.surveyUrl) {
    link.href = cfg.surveyUrl + encodeURIComponent(group);
  } else {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      console.warn("[study] surveyUrl is empty. Set it in assets/config.js");
    });
  }
  var delay = Math.max(0, Number(cfg.surveyDelaySeconds) || 0) * 1000;
  setTimeout(function () {
    bar.hidden = false;
    requestAnimationFrame(function () { bar.classList.add("is-visible"); });
  }, delay);

  // 2) Demo reservation form: never sends anything anywhere.
  var form = document.getElementById("reserve");
  var msg = form.querySelector(".reserve__msg");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    msg.hidden = false;
  });
})();
