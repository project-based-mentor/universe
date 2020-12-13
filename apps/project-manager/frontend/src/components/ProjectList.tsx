import Project from "../models/project";
import ProjectCard from "./ProjectCard";

export interface ProjectListProps {
    projects: Project[]
}

export const ProjectList = ({ projects }: ProjectListProps) => {
    if (!projects.map) {
        return <div>Could not fetch projects</div>
    }

    return (
        <div className="container">
            {projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
    );
}

export default ProjectList;
