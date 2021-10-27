document.getElementById('formTask').addEventListener('submit', saveCard);

function saveCard(e){
   
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    // console.log(title, description)

    const task = {
        title , //title:title
        description, //description:description   
    };
    // console.log(task)

    if (localStorage.getItem('tasks') === null) {
        let tasks = [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }else{
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    getCard();
    document.getElementById('formTask').reset();
    e.preventDefault();
}

function getCard() {
    let task = JSON.parse(localStorage.getItem('tasks'));
    let taskView = document.getElementById('task');

    taskView.innerHTML = "";
    for(let i = 0; i < task.length; i++) {
        let title = task[i].title;
        let description = task[i].description;
        taskView.innerHTML += `<div class="card mb-3">
            <div class ="card-body">
            <p>${title} - ${description}</p>
            <a class="btn btn-danger" onclick = "deleteCard('${title}')">
            Delete </a>
            </div>
        </div>`
    }
}

function deleteCard(title){
    let task = JSON.parse(localStorage.getItem('tasks'));
    for(let i = 0; i < task.length; i++) {
        if (task[i].title == title){
            task.splice(i, 1);
        }
    }
    localStorage.setItem('tasks', JSON.stringify(task));
    getCard();
}

getCard();