export class Person{
    id?: number;
    name: string;
    surname: string;
    title: string;
    location: string;
    description: string;
    dirPhoto: string;
    dirBanner: string

    constructor(name: string, surname: string, title: string, location: string, description: string, dirPhoto: string, dirBanner: string){
        this.name = name;
        this.surname = surname;
        this.title = title;
        this.location = location;
        this.description = description;
        this.dirPhoto = dirPhoto;
        this.dirBanner = dirBanner;
    }
}