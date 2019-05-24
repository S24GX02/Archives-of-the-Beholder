export class Faction {

    public documentId: string;
    public name: string;
    public type: string;
    public members: number;
    public description: string;

    constructor(documentId: string, name: string, type: string, members: number, description: string,){
        this.documentId = documentId;
        this.name = name;
        this.type = type;
        this.members = members;
        this.description = description;
    }

}
