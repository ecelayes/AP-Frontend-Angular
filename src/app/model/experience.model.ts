export class Experience{
    id?: number;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
    dirIcon: string;

    constructor(company: string, position: string, startDate: string, endDate: string, description: string, dirIcon: string){
        this.company = company;
        this.position = position;
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = description;
        this.dirIcon = dirIcon;
    }
}