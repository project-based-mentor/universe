import { useEffect, useState, useRef } from 'react';
import Todo from "../models/Todo";
import './TodoListPage.css';

interface Props {
    todos: Todo[],
    loading?: boolean
}

export const TodoListPage = ({ todos, loading }: Props) => {
    return (
        <Hero>
            <>
                <main className="section">
                    <section className="top-fade" />
                    {loading && <Loading />}
                    {!loading && todos.length === 0 && <Empty />}
                    {!loading && <List todos={todos} />}
                    <section className="bottom-fade" />
                </main>
                <div className="is-fab">
                    <button className="button is-rounded" onClick={e => {
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}>
                        <span className="is-size-4">^</span>
                    </button>
                </div>
            </>
        </Hero>
    );
}
const Empty = () => <div>No todos yet...</div>;
const loadingPlaceholders: Todo[] = Array(5).fill({ title: "Loading...", completed: false })
const Loading = () => <List todos={loadingPlaceholders} />

const showPerPage = 10;
const List = ({ todos }: Pick<Props, "todos">) => {
    const loader = useRef<HTMLDivElement>(null);
    const [page, setPage] = useState(0);
    const [shownTodos, setShownTodos] = useState<Todo[]>(todos.slice(0, showPerPage));
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0
        };
        const observer = new IntersectionObserver(handleObserver, options);
        if (loader.current) {
            observer.observe(loader.current)
        }
    }, []);
    useEffect(showTodos, [page, shownTodos, todos]);
    function showTodos() {
        const start = page * showPerPage;
        const end = start + showPerPage
        if (end > todos.length || end === shownTodos.length) {
            return;
        }

        const newTodos = todos.slice(start, end);
        setShownTodos(shownTodos.concat(newTodos));
    }

    const handleObserver = (entities: any[]) => {
        const target = entities[0];
        if (target.isIntersecting) {
            setPage((page) => page + 1)
        }
    }
    return (<>
        {
            shownTodos.map((todo, key) => <TodoTile key={todo.id || key} todo={todo} onDelete={() => {
                shownTodos[key].completed = true;
                setShownTodos([...shownTodos]);
            }} />)
        }
        <div ref={loader} />
    </>
    );
}

const Hero = ({ children }: { children: React.ReactElement }) => (
    <section className="hero is-fullheight is-link is-bold">
        <div className="hero-body">
            <div className="container">
                <div className="section hero-section">
                    <h1 className="title">Todos</h1>
                    <h2 className="subtitle">What will you do today?</h2>
                </div>
                {children}
            </div>
        </div>
    </section>
);

const TodoTile = ({ todo, onDelete }: { todo: Todo, onDelete: () => void }) => (
    <div className={`notification is-link is-light todo ${todo.completed ? 'completed-todo' : ''}`}>
        {
            !todo.completed && (
                <button className="delete" onClick={onDelete}></button>
            )
        }
        <p>{todo.title}</p>
    </div>
)

export default TodoListPage;
