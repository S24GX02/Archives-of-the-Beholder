export class Campaign{
    
    public documentId: string;
    public campaignName: string;
    public campaignType: string;
    public campaignDescription: string;
    public whatsNextTitle: string;
    public whatsNext: string;
    public dmId: string;

    constructor(documentId: string, campaignName: string, campaignType: string, campaignDescription: string, whatsNextTitle: string, whatsNext: string, dmId: string){
        this.documentId = documentId;
        this.campaignName = campaignName;
        this.campaignType = campaignType;
        this.campaignDescription = campaignDescription;
        this.whatsNextTitle = whatsNextTitle;
        this.whatsNext = whatsNext;
        this.dmId = dmId;
    }
}