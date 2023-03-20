export class Skill{
    id?: number;
    nameSkill: string;
    dirIcon: string;
    percentage: number;

    constructor(nameSkill: string, dirIcon: string, percentage: number){
        this.nameSkill = nameSkill;
        this.dirIcon = dirIcon;
        this.percentage = percentage;
    }
}