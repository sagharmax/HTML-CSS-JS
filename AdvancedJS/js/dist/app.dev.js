"use strict";

(function (app) {
  'use strict';

  var pageItems = {};

  app.todoStartup = function () {
    var frm = document.getElementById('taskForm');
    pageItems.taskList = document.getElementById('taskList');
    pageItems.taskInput = frm.querySelector('#taskInput');
    pageItems.submit = frm.querySelector('#submit');
    pageItems.removeButton = frm.querySelector('#remove');
    pageItems.submit.addEventListener('click', addTask);
    pageItems.taskList.addEventListener('click', completeTask);
    pageItems.removeButton.addEventListener('click', removeCompletedTask);
    loadFromStorage();
  }; // LocalStorage OR SessionStorage


  function loadFromStorage() {
    var itemsString = localStorage.getItem('taskList');

    if (itemsString !== null) {
      var items = JSON.parse(itemsString);
      items.forEach(function (item) {
        var li = document.createElement('li');
        li.innerText = item.task;

        if (item.isCompleted) {
          li.classList.add('completed-task');
        }

        pageItems.taskList.appendChild(li);
      });
    }
  }

  function saveToStorage() {
    var items = Array.from(pageItems.taskList.children);
    var itemsToSave = items.map(function (item) {
      return {
        task: item.innerText,
        isCompleted: item.classList.contains('completed-task')
      };
    });
    localStorage.setItem('taskList', JSON.stringify(itemsToSave));
  }

  function removeCompletedTask(e) {
    e.preventDefault();
    var items = Array.from(pageItems.taskList.children);
    items.forEach(function (element) {
      if (element.classList.contains('completed-task')) {
        pageItems.taskList.removeChild(element);
      }
    });
    saveToStorage();
  }

  function completeTask(e) {
    if (e.target.classList.contains('completed-task')) {
      e.target.classList.remove('completed-task');
    } else {
      e.target.classList.add('completed-task');
    }

    saveToStorage();
  }

  function addTask(e) {
    e.preventDefault();
    var li = document.createElement('li');
    li.innerText = pageItems.taskInput.value;
    pageItems.taskList.appendChild(li);
    pageItems.taskInput.value = '';
    saveToStorage();
  }
})(window.app = window.app || {});