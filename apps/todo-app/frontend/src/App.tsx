import TodoListPage from './pages/TodoListPage';
import useTodos from './hooks/useTodos'


export const App = () => {
    const todosQuery = useTodos();

    return (
        <TodoListPage loading={todosQuery.isLoading} todos={todosQuery.data || []}/>
    )
}

export default App;
