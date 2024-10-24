interface Todo {
    id: number;
    title:string;
}

interface AddTodo {
    type: 'ADD';
    todo: Todo;
}

interface DeleteToDo {
    type: 'DELETE'
    todoId: number
}

type TodoAction = AddTodo | DeleteToDo

const todoReducer = (todos:Todo[], action:TodoAction) => {
    switch(action.type){
        case 'ADD':
            return [action.todo, ...todos];
        
            case 'DELETE':
                return todos.filter((t) => t.id !== action.todoId )
    }

}

export default todoReducer