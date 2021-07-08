//Função que adiciona tarefa 
function addTask() {
    const taskTitle = window.document.querySelector('#task-title').value;
    console.log(taskTitle);

    if(taskTitle) {

        //Clona template
        const template = document.querySelector('.template');
        const newTask = template.cloneNode(true);

        //Adiciona título
        newTask.querySelector('.task-title').textContent = taskTitle;

        //Remover as classes desnecessárias
        newTask.classList.remove('template');
        newTask.classList.remove('hide');

        //Adiciona tarefa finalista
        const list = document.querySelector('#task-list');
        list.appendChild(newTask);

        //Adicionar evento de remover
        const removeBtn = newTask.querySelector('.remove-btn').addEventListener('click', function () {
            removeTask(this);
        })

        //Adicionar evento de completar tarefa
        const doneBtn = newTask.querySelector('.done-btn').addEventListener('click', function () {
            completeTask(this);
        })

        //Limpar texto
        document.querySelector('#task-title').value = ""; 
        
    }
}

//Função de remover tarefa
function removeTask(task) {
    task.parentNode.remove(true);
}

//Função de completar tarefa
function completeTask(task) {
    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle('done')
}



const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener("click", function(e) {

    e.preventDefault();
    
    addTask();
});