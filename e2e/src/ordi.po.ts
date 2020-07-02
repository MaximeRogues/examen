import { browser, by, element } from 'protractor';

export class OrdiPage {
sleep(){
browser.driver.sleep(5000);
}


completeForm() {
    let marque = element.all(by.id('marque'));
    let modele = element.all(by.id('modele'));
    let type = element.all(by.id('type'));
    let categorie = element.all(by.id('categorie'));
    let prixAchat = element.all(by.id('prixAchat')); 
    let prixVente = element.all(by.id('prixVente')); 


marque.click();
modele.sendKeys('essai');
type.sendKeys('Fixe');
categorie.click();
prixAchat.sendKeys(200);
prixVente.sendKeys(300);

}
}