export class Education{
    id?: number;
    institution: string;
    degree: string;
    career: string;
    startDate: string;
    endDate: string;
    dirIcon: string;

    constructor(institution: string, degree: string, career: string, startDate: string, endDate: string, dirIcon: string){
        this.institution = institution;
        this.degree = degree;
        this.career = career;
        this.startDate = startDate;
        this.endDate = endDate;
        this.dirIcon = dirIcon;
    }
}