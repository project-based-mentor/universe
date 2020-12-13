import { Meta, Story } from '@storybook/react/types-6-0';
import { ProjectList, ProjectListProps } from '../components';
import projects from './stubs/projects.json';

interface Args {
    projects: 'Empty' | 'One' | 'Many'
}

const Template = (args: Args) => {
    const props = toProps(args);
    return (
        <ProjectList {...props} />
    );
}

export const List: Story<Args> = Template.bind({});
List.args = {};

export const ListWithProjects: Story<Args> = Template.bind({});
ListWithProjects.args = {
    projects: 'Many'
};

function toProps(args: Args) {
    let p: any[] = [];
    switch (args.projects) {
        case 'One':
            p = [projects[0]]
            break;
        case 'Many':
            p = projects
            break;
    }
    const props: ProjectListProps = {
        projects: p
    }

    return props;
}

export default {
    title: 'Apps/ProjectManager/Components',
    component: ProjectList,
    argTypes: {
        projects: {
            control: {
                type: 'select',
                options: ['Empty', 'One', 'Many'],
                defaultValue: 'Empty'
            }
        }
    }
} as Meta<Args>;
