let inputTasks = document.getElementById("t1");
let addButton = document.getElementById("b1");
let tasks = document.getElementById("d1");
addButton.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.innerText = inputTasks.value;
    var deleteButton = document.createElement('button');
    deleteButton.innerText = "delete🙅";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener('click', function() {
        tasks.removeChild(paragraph);
    });
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
    });
    paragraph.addEventListener('dblclick', function() {
        tasks.removeChild(paragraph);
    });
    paragraph.appendChild(deleteButton);
    tasks.appendChild(paragraph);
    inputTasks.value = "";
});