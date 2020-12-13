import {useProjects} from '../graphql';
import {ProjectList} from '../components';

export const ProjectsPage = () => {
    const {data, error} = useProjects();
    if (error) {
        return <div>Error loading projects</div>
    }

    return <ProjectList projects={data ? data.projects : []} />
}
