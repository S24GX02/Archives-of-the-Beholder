export class Character {

    public documentId: string;
    public characterName: string;
    public characterBackstory: string;
    public characterRace: string;
    public characterRole: string;
    public characterHitDie: string;
    public characterLvl: number;
    public characterProficiencyBonus: number;
    public characterArmorClass: number;
    public characterInitiative: number;
    public characterSpeed: number;
    public characterXp: number;
    public characterHealthMax: number;
    public characterHealthCurrent: number;
    public userId: string;
    public campaignId: string;

    constructor(documentId: string, characterName: string, characterBackstory: string,
                characterRace: string, characterRole: string,
                characterHitDie: string, characterLvl: number,
                characterProficiencyBonus: number, characterArmorClass: number,
                characterInitiative: number, characterSpeed: number,
                characterXp: number, characterHealthMax: number,
                characterHealthCurrent: number, userId: string, campaignId: string) {

    this.documentId = documentId;
    this.characterName = characterName;
    this.characterBackstory = characterBackstory;
    this.characterRace = characterRace;
    this.characterRole = characterRole;
    this.characterHitDie = characterHitDie;
    this.characterLvl = characterLvl;
    this.characterProficiencyBonus = characterProficiencyBonus;
    this.characterArmorClass = characterArmorClass;
    this.characterInitiative = characterInitiative;
    this.characterSpeed = characterSpeed;
    this.characterXp = characterXp;
    this.characterHealthMax = characterHealthMax;
    this.characterHealthCurrent = characterHealthCurrent;
    this.userId = userId;
    this.campaignId = campaignId;
    }

}
