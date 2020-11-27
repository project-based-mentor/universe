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
            <main className="section">
                <div className="container">
                    {loading && <Loading />}
                    {!loading && todos.length === 0 && <Empty />}
                    {!loading && <List todos={todos} filters={filters} />}
                </div>
            </main>
        </Hero>
    );
}
const Empty = () => <div>No todos yet...</div>;
const loadingPlaceholders: Todo[] = Array(5).fill({ title: "Loading...", completed: false })
const Loading = () => <List filters={defaultFilters} todos={loadingPlaceholders} />

const List = ({ todos, filters }: Pick<Props, "todos"> & { filters: Filters }) =>
    <>
        {
            todos.map((todo) => <TodoTile key={todo.id} todo={todo} />)
        }
    </>

const Hero = ({ children }: { children: React.ReactElement }) => (
    <section className="hero is-fullheight is-link is-bold">
        <div className="hero-body">
            <div className="container">
                <h1 className="title">Todos</h1>
                <h2 className="subtitle">What will you do today?</h2>
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
