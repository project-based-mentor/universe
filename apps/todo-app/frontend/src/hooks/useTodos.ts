import { useQuery } from 'react-query';
import Todo from '../models/Todo';

interface Props {
    mocked?: {
        loading: boolean,
        todos: Todo[]
    }
}

export const useTodos = (props?: Props) =>
    useQuery<Todo[], Error>('todos', async () => {
        if (props && props.mocked) {
            return Promise.resolve(props.mocked.todos);
        }

        return getTodos();
    })

const getTodos = async (): Promise<Todo[]> => await fetch('https://jsonplaceholder.typicode.com/todos').then(r => r.json())

export default useTodos;
