(function () {
  "use strict";
  function v(id, max) { var n = parseFloat(document.getElementById(id).value); return isFinite(n) ? Math.min(Math.max(n, 0), max) : 0; }
  var out = document.getElementById("c-out"), note = document.getElementById("c-note");
  function run() {
    var calls = v("c-calls", 5000), miss = v("c-miss", 100) / 100, close = v("c-close", 100) / 100, val = v("c-value", 1000000);
    var missed = calls * miss * 52 / 12, lost = missed * close * val;
    out.textContent = "$" + Math.round(lost).toLocaleString("en-US");
    note.textContent = "About " + Math.round(missed) + " missed new-customer calls a month. Assumes missed callers book elsewhere; some will call back, so treat this as an upper bound.";
  }
  document.getElementById("calc").addEventListener("input", run);
  run();
})();
