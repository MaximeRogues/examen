export class Ordi {
    id: number;
    modele: string;
    marque: string;
    type: string;
    categorie: string;
    dateEntree: Date;
    prixAchat: number;
    prixVente: number;

    constructor( id: number = null, modele: string = null, marque: string = null, type: string = null, categorie: string = null, dateEntree: Date = new Date(), prixAchat: number = null, prixVente: number = null) {
        this.id = id
        this.modele = modele
        this.marque = marque
        this.type = type
        this.categorie = categorie
        this.dateEntree = dateEntree
        this.prixAchat = prixAchat
        this.prixVente = prixVente
    }


}
