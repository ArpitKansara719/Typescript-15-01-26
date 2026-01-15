"use strict";
const inputText = document.getElementById('inputText');
const addButton = document.getElementById('submit');
const todoList = document.getElementById('todo-list');
addButton.disabled = true;
addButton.addEventListener('click', () => {
    const inputValue = inputText.value.trim();
    if (!inputValue)
        return;
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const span = document.createElement('span');
    span.innerText = inputValue;
    checkbox.addEventListener('change', () => {
        span.classList.toggle('checked', checkbox.checked);
    });
    li.appendChild(checkbox);
    li.appendChild(span);
    todoList.appendChild(li);
    inputText.value = '';
    addButton.disabled = true;
});
inputText.addEventListener('keyup', (e) => {
    const value = e.target.value;
    addButton.disabled = value.trim() === '';
});
