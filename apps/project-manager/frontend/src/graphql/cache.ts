import { makeVar } from "@apollo/client";
import { Project } from "../models";
import stubs from '../stories/stubs/projects.json'

export const projects = makeVar<Project[]>(stubs as any[]);
