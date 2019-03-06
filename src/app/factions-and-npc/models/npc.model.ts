export class Npc{

    public name: string;
    public race: string;
    public role: string;
    public location: string;
    public backstory: string;
    public occupancy: string;
    public imagePath: string;

    constructor(name: string, race: string, role: string, backstory: string, occupancy: string, location: string, imagePath: string){
        this.name = name;
        this.race = race;
        this.role = role;
        this.backstory = backstory;
        this.occupancy = occupancy;
        this.location = location;
        this.imagePath = imagePath;
    }

}