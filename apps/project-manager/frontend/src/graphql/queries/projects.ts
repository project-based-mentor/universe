import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { Project } from "../../models";

export const projectsQuery = gql`
    query getProjects {
        projects @client
    }
`;

export interface ProjectsQueryResult {
    projects: Project[]
}

export const useProjects = () => useQuery<ProjectsQueryResult>(projectsQuery);
