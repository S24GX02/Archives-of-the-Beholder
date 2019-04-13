export class Npc{
    
    public documentId: string;
    public backstory: string;
    public campaignId: number;
    public factionId: number;
    public imageUrl: string;
    public isHidden: boolean;
    public level: number;
    public location: string;
    public name: string;
    public occupancy: string;
    public race: string;
    public role: string; //This is actually the class of the NPC

    constructor(documentId: string, backstory: string, campaignId: number, factionId: number, imageUrl: string,
                isHidden: boolean, level: number, location: string, name: string, occupancy: string, race: string , role: string,){
        this.documentId = documentId;
        this.backstory = backstory;
        this.campaignId = campaignId;
        this.factionId = factionId;
        this.imageUrl = imageUrl;
        this.isHidden = isHidden;
        this.level = level;
        this.location = location;
        this.name = name;
        this.occupancy = occupancy;
        this.race = race;
        this.role = role;
    }
}