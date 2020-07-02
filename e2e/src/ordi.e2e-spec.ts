import {browser, element, logging, by} from 'protractor';
import {OrdiPage} from './ordi.po';


describe('test des Ordi', () => {
    // Variable contenant notre OrdiPage
    let page: OrdiPage;
    // variable que l’on utilisera pour compter le nombre de ordi
    let nbOrdi: number;
    // Avant de commencer les tests, nous demandons à notre navigateur de se rendre à l’URL suivante
        
    beforeEach(() => {
    page = new OrdiPage();
    browser.get('/home');
    });
    
    it( 'en tant qu\'utilisateur, je peux voir la liste des ordis et cliquer sur un bouton pour en ajouter un', () => {
        element.all(by.css('.card')).then(listeOrdi => {
            nbOrdi = listeOrdi.length;
            page.sleep();
            element(by.css('#addOrdiLink')).click();
            page.sleep();
            expect(browser.driver.getCurrentUrl()).toContain('add-ordi');
        });
    });

    it( 'en tant qu\'utilisateur, je peux renseigner le formulaire d\'ajout pour créer un ordi. Un ordi apparait.', () => {
        browser.get('/add-ordi');
            // je remplis le formulaire avec les infos de ordi.po.ts 
            page.completeForm();
            page.sleep();
            element.all(by.css('#submitOrdi')).click().then(listeOrdi => {
                expect(browser.driver.getCurrentUrl()).toContain('home');
            });
    });

    it('j\'ai un ordi de plus dans ma liste', () => {
        page.sleep()
        element.all(by.css('.card')).then(listeOrdi => {
            // je compare la listeOrdi avant et après l'ajout d'un nouveau ordi
            expect(listeOrdi.length).toBeGreaterThan(nbOrdi);
        })    
    })
    
    afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
    level: logging.Level.SEVERE,
    } as logging.Entry));
    });
});