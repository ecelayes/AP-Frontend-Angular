export class Project{
    id?: number;
    nameProject: string;
    dirImage: string;
    startDate: string;
    endDate: string;
    description: string;
    link: string;

    constructor(nameProject: string, dirImage: string, startDate: string, endDate: string, description: string, link: string){
        this.nameProject = nameProject;
        this.dirImage = dirImage;
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = description;
        this.link = link;
    }
}