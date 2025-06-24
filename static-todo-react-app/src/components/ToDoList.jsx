function ToDoList() {
    const toDoListTasks = ["Learn React", 
        "Build a project", 
        "Read documentation"]

    const individualTasks = toDoListTasks.map(task => <li>{task}</li>)

    return (
<ul>
    <li>{individualTasks}</li>
</ul>

    );
}

export default ToDoList