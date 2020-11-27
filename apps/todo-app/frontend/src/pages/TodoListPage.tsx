import { useEffect, useState, useRef } from 'react';
import Todo from "../models/Todo";
import './TodoListPage.css';

interface Props {
    todos: Todo[],
    loading?: boolean
    filters?: Filters
}

interface Filters {
    showComplete?: boolean
}

const defaultFilters: Filters = {
    showComplete: true
}

export const TodoListPage = ({ todos, loading, filters = defaultFilters }: Props) => {
    return (
        <Hero>
            <>
                <main className="section">
                    <section className="top-fade" />
                    {loading && <Loading />}
                    {!loading && todos.length === 0 && <Empty />}
                    {!loading && <List todos={todos} filters={filters} />}
                    <section className="bottom-fade" />
                </main>
            </>
        </Hero>
    );
}
const Empty = () => <div>No todos yet...</div>;
const loadingPlaceholders: Todo[] = Array(5).fill({ title: "Loading...", completed: false })
const Loading = () => <List filters={defaultFilters} todos={loadingPlaceholders} />

const List = ({ todos, filters }: Pick<Props, "todos"> & { filters: Filters }) => {
    const loader = useRef<HTMLDivElement>(null);
    const [page, setPage] = useState(0);
    const [shownTodos, setShownTodos] = useState(todos.slice(0, 10));

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

    useEffect(() => {
        window.addEventListener('scroll', () => {

        });
    })

    useEffect(() => {
        const start = page * 10;
        const newTodos = shownTodos.concat(todos.slice(page * 10, start + 10));
        setShownTodos(newTodos);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const handleObserver = (entities: any[]) => {
        const target = entities[0];
        if (target.isIntersecting) {
            setPage((page) => page + 1)
        }
    }
    return (<>
        {
            shownTodos.map((todo, key) => <TodoTile key={key} todo={todo} />)
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

const TodoTile = ({ todo }: { todo: Todo }) => (
    <div className="notification is-link is-light">
        <button className="delete"></button>
        <p>{todo.title}</p>
    </div>
)

export default TodoListPage;
