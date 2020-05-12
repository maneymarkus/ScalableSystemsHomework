function init(window, document, undefined) {

  let Module = (function(window, document, undefined) {

    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    });

    $("#form-control-range").change(function() {
      $("#form-control-range").attr("title", $("#form-control-range").val());
    });

  })(window, document);

}

document.addEventListener("DOMContentLoaded", function() {
  init(window, document);
});
