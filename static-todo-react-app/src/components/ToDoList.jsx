function ToDoList() {
    const toDoListTasks = ["Learn React",
        "Build a project",
        "Read documentation"]

    const individualTasks = toDoListTasks.map(task => <li>{task}</li>)

    return (
        <ul className="list">
            <li>{toDoListTasks[0]}</li>
            <li>{toDoListTasks[1]}</li>
            <li>{toDoListTasks[2]}</li>
        </ul>

    );
}

export default ToDoList