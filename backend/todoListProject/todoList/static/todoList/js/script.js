function init(window, document, undefined) {

  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }

  let SliderModule = (function(window, document, undefined) {

    let progressSlider;

    if (progressSlider = document.getElementById("myRange")) {
      var output = document.getElementById("progresspercent");
      output.innerHTML = progressSlider.value + "%";
      progressSlider.oninput = function () {
        output.innerHTML = this.value + "%";
      }
    }

  })(window, document);

  let MainTodoModule = (function (window, document, undefined) {

    let todos = document.getElementsByClassName("todo");

    if(todos != undefined) {
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
          let todo_id = this.getElementsByClassName("task")[0].getAttribute("href").replace("/edit/", "").replace("/", "");
          if (target.classList.contains("todo-done")) {
            let csrftoken = getCookie('csrftoken');
            $.ajaxSetup({
                beforeSend: function(xhr, settings) {
                    if (!this.crossDomain) {
                        xhr.setRequestHeader("X-CSRFToken", csrftoken);
                    }
                }
            });
            $.ajax({
              type: "POST",
              url: "/finish/" + todo_id,
              data: {},
              success: function(data){
                  this.classList.add("task-done");
                  console.log("success");
                  console.log(data);
              },
              failure: function(data){
                  console.log("failure");
                  console.log(data);
              },
            });
          }
        });
      }
    }

  })(window, document);

  let ModalModule = (function(window, document, undefined) {

    let deleteTodo;
    let todo_id;

    $('#delete-modal').on('show.bs.modal', function () {
      let deleteButton = $(event.relatedTarget);
      let target = event.target;
      while(target && target.nodeName != "BODY" && !target.classList.contains("todo")) {
          target = target.parentNode;
      }
      deleteTodo = target;
      todo_id = deleteTodo.getElementsByClassName("task")[0].getAttribute("href").replace("/edit/", "").replace("/", "");
      let task = target.getElementsByClassName("task")[0].innerHTML;
      let modal = $(this);
      modal.find("span.task-name").text(task);
    });

    $("#delete-modal .delete-btn").on("click", function() {
      if (deleteTodo != undefined) {
        let csrftoken = getCookie('csrftoken');
        $.ajaxSetup({
            beforeSend: function(xhr, settings) {
                if (!this.crossDomain) {
                    xhr.setRequestHeader("X-CSRFToken", csrftoken);
                }
            }
        });
        $.ajax({
          type: "POST",
          url: "/delete/" + todo_id,
          data: {},
          success: function(data){
              console.log("success");
              console.log(data);
          },
          failure: function(data){
              console.log("failure");
              console.log(data);
          },
        });
        window.setTimeout(function() {
          deleteTodo.remove();
          deleteTodo = undefined;
        }, 500);
      }
      $("#delete-modal").modal("hide");
    });

  })(window, document);

  let FormModule = (function(window, document, undefined) {

    $(".submit").on("click", function() {
      $("#form").submit();
    });

  })(window, document);

}

document.addEventListener("DOMContentLoaded", function() {
  init(window, document);
});
