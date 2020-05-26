function init(window, document, undefined) {

  let Module = (function(window, document, undefined) {

    if (slider = document.getElementById("myRange")) {
      var output = document.getElementById("progresspercent");
      output.innerHTML = slider.value + "%";
      slider.oninput = function () {
        output.innerHTML = this.value + "%";
      }
    }

  })(window, document);

}

document.addEventListener("DOMContentLoaded", function() {
  init(window, document);
});
