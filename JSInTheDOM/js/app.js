(function(app) {
    'use strict';

    const pageItems = {};
    app.todoStartup = function() {
        const frm = document.getElementById('taskForm');
        pageItems.taskList = document.getElementById('taskList');
        pageItems.taskInput = frm.querySelector('#taskInput')
        pageItems.submit = frm.querySelector('#submit');
        pageItems.removeButton = frm.querySelector('#remove');

        pageItems.submit.addEventListener('click', addTask);
        pageItems.taskList.addEventListener('click', completeTask);
        pageItems.removeButton.addEventListener('click', removeCompletedTask);
    };

    function removeCompletedTask(e) {
        e.preventDefault();
        const items = Array.from(pageItems.taskList.children);
        items.forEach(element => {
            if (element.classList.contains('completed-task')) {
                pageItems.taskList.removeChild(element);
            }
        });
    }

    function completeTask(e) {
        if (e.target.classList.contains('completed-task')) {
            e.target.classList.remove('completed-task');
        } else {
        e.target.classList.add('completed-task');
        }
    }

    function addTask(e) {
        e.preventDefault();
        const li = document.createElement('li');
        li.innerText = pageItems.taskInput.value;
        pageItems.taskList.appendChild(li);
        pageItems.taskInput.value = '';
    }
})(window.app = window.app || {})