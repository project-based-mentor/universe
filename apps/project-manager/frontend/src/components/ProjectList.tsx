import Project from "../models/project";
import { groupBy } from "../utils";
import ProjectCard from "./ProjectCard";
import './ProjectList.css';

type Color = 'primary' | 'success' | 'info' | 'link';

const heros: Color[] = [
    'info',
    'link',
    'primary',
    'success'
]

const getColor = (i: number) => {
    const index = i % heros.length;
    return heros[index];
}
export interface ProjectListProps {
    projects: Project[]
}

export const ProjectList = ({ projects }: ProjectListProps) => {
    if (!projects.map) {
        return <div>Could not fetch projects</div>
    }

    const grouped = groupBy<Project>(p => p.category, projects);

    return (
        <div className="container">
            {Object.keys(grouped).map((g, i) =>
                <Grouped index={i} key={g} color={getColor(i)} category={g} projects={grouped[g]} />)}
        </div>
    );
}

interface GroupedProps {
    projects: Project[],
    category: string,
    index: number,
    color: Color
}

const Grouped = (props: GroupedProps) =>
    <section className={`hero project-hero is-medium is-${props.color}`}>
        {props.index !== 0 && (
            <div className="triangles">
                <div className="triangle-top-left" />
                <div className="triangle-top-right" />
            </div>
        )}
        <div className="hero-body">
            <div className="container">
                <h2 className="title has-text-centered">{props.category}</h2>
                {props.projects.map(p => <ProjectCard key={p.id} project={p} color={props.color} />)}
            </div>
        </div>
        <div className="triangles">
            <div className="triangle-bottom-left" />
            <div className="triangle-bottom-right" />
        </div>
    </section>

export default ProjectList;
