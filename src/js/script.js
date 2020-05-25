function init(window, document, undefined) {

  let SliderModule = (function(window, document, undefined) {

    if (slider = document.getElementById("myRange")) {
      var output = document.getElementById("progresspercent");
      output.innerHTML = slider.value + "%";
      slider.oninput = function () {
        output.innerHTML = this.value + "%";
      }
    }

  })(window, document);

  let MainTodoModule = (function (window, document, undefined) {

    let todos = document.getElementsByClassName("todo");

    for (let i = 0; i < todos.length; i++) {
      todos[i].addEventListener("click", function(e) {
        let ev = e || window.event;
        let target = ev.target || window.target;
        while (target && target.nodeName != "A" && target.nodeName != "A") {
          target = target.parentNode;
        }
        if (!target || target.nodeName == "BODY") {
          return;
        }
        if (target.classList.contains("todo-done")) {
          this.classList.add("task-done");
        }
        if (target.classList.contains("delete")) {
          //TODO: react to delete
        }
      });
    }


  })(window, document);

}

document.addEventListener("DOMContentLoaded", function() {
  init(window, document);
});
