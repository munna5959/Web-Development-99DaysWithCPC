document.getElementById('addTaskBtn').addEventListener('click', function() {
    let taskInput = document.getElementById('taskInput').value;
    if (taskInput) {
        addTask(taskInput);
        document.getElementById('taskInput').value = '';
        saveTasks();
    } else {
        alert('Please enter a task');
    }
});

document.getElementById('allTasksBtn').addEventListener('click', function() {
    filterTasks('all');
});

document.getElementById('completedTasksBtn').addEventListener('click', function() {
    filterTasks('completed');
});

document.getElementById('pendingTasksBtn').addEventListener('click', function() {
    filterTasks('pending');
});

document.getElementById('clearTasksBtn').addEventListener('click', function() {
    clearTasks();
});

function addTask(task) {
    let taskList = document.getElementById('taskList');
    let li = document.createElement('li');
    li.textContent = task;

    let buttonGroup = document.createElement('div');
    buttonGroup.classList.add('button-group');

    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('editBtn');
    editBtn.addEventListener('click', function() {
        let newTask = prompt('Edit task', task);
        if (newTask) {
            li.firstChild.textContent = newTask;
            saveTasks();
        }
    });

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
        saveTasks();
    });

    li.addEventListener('click', function() {
        li.classList.toggle('completed');
        saveTasks();
    });

    buttonGroup.appendChild(editBtn);
    buttonGroup.appendChild(deleteBtn);
    li.appendChild(buttonGroup);
    taskList.appendChild(li);
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll('#taskList li').forEach(li => {
        tasks.push({
            text: li.firstChild.textContent.trim(),
            completed: li.classList.contains('completed')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        addTask(task.text);
        if (task.completed) {
            document.querySelector('#taskList li:last-child').classList.add('completed');
        }
    });
}

function filterTasks(filter) {
    let tasks = document.querySelectorAll('#taskList li');
    tasks.forEach(task => {
        switch (filter) {
            case 'all':
                task.style.display = 'flex';
                break;
            case 'completed':
                task.style.display = task.classList.contains('completed') ? 'flex' : 'none';
                break;
            case 'pending':
                task.style.display = task.classList.contains('completed') ? 'none' : 'flex';
                break;
        }
    });
}

function clearTasks() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    localStorage.removeItem('tasks');
}

window.onload = loadTasks;
