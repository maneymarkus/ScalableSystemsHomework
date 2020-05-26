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

    let todos = $(".todo");

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

      return {
        getTodosApi : function() {
          return todos;
        },
      }

    }

  })(window, document);

  let ModalModule = (function(window, document, undefined) {

    let deleteTodo;

    $('#delete-modal').on('show.bs.modal', function () {
      let deleteButton = $(event.relatedTarget);
      let target = event.target;
      while(target && target.nodeName != "BODY" && !target.classList.contains("todo")) {
          target = target.parentNode;
      }
      deleteTodo = target;
      let task = target.getElementsByClassName("task")[0].innerHTML;
      let modal = $(this);
      modal.find("span.task-name").text(task);
    });

    $("#delete-modal .delete-btn").on("click", function() {
      if (deleteTodo != undefined) {
        window.setTimeout(function() {
          deleteTodo.remove();
          deleteTodo = undefined;
        }, 500);
      }
      $("#delete-modal").modal("hide");
    });

  })(window, document);

}

document.addEventListener("DOMContentLoaded", function() {
  init(window, document);
});
