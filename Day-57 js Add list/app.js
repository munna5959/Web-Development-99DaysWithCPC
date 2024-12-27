let list = document.getElementById('list');
let stu = [];

let addStudent = document.getElementById('addBtn');

addStudent.addEventListener('click', function() {
    let studentName = prompt('Enter student name');
    if (studentName) {
        stu.push(studentName);
        let li = document.createElement('li');
        li.textContent = studentName;
        list.appendChild(li);
    }
});
