document.querySelector('#toDo-push').onclick = function () {

    //new task add
    if (document.querySelector('#toDo-newtask input').
        value.length == 0) {
        alert("Nie wprowadziłeś zadania!")
    } else {
        document.querySelector("#toDo-tasks").innerHTML
            += `
            <div class="toDo-task">
                <span id="toDo-taskname">
                    ${document.querySelector
                ('#toDo-newtask input').value}
                </span>
                <button class="toDo-delete">
                <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        `;
        
        //remove task from tasklist
        var current_tasks = document.querySelectorAll(".toDo-delete");
        for (let i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }

        //crossing off completed task
        var tasks = document.querySelectorAll('.toDo-task');
        for (let i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function () {
                this.classList.toggle('toDo-completed');
            }
        }

        //clearing input field after each entry
        document.querySelector("#newtask input").value = "";
    }
}

