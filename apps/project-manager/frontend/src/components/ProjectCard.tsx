import { Project } from "../models";

interface Props {
    project: Project,
    color: string
}

export const ProjectCard = ({ project, color }: Props) => (
    <div className='card mb-6'>
        <header className={`card-header has-background-${color}`}>
            <p className="card-header-title has-text-light">{project.title}</p>
        </header>
        <div className="card-content">
            <div className="content">
                <p>{project.description}</p>
            </div>
        </div>
        <footer className="card-footer">
            <button className="button card-footer-item" style={{border: 'none'}}>10 stars</button>
            <button className="button card-footer-item" style={{border: 'none'}}>20 comments</button>
        </footer>
    </div>
);

export default ProjectCard;
