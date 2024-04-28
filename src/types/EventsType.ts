import { ProjectModel } from "@/components/ProjectCards/Project.model";
import { Project } from "./ProjectsType";
export interface Event {
    id: string;
    name: string;
    date: Date;
    location: string;
    description: string;
    startTime: string;
    image: string | null;
    isFeatured: boolean;
    createdAt: Date;
    updatedAt: Date;
    projects: ProjectModel[];
    members: Member[];
}


type Member = {
    name: string | null;
    id: string;
    isCurrentUserMember?: boolean;
  };