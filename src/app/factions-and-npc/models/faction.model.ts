export class Faction{

    public name: string;
    public type: string;
    public members: number;
    public description: string;
    public imagePath: string;

    constructor(name: string, type: string, members: number, description: string, imagePath: string){
        this.name = name;
        this.type = type;
        this.members = members;
        this.description = description;
        this.imagePath = imagePath;
    }

}