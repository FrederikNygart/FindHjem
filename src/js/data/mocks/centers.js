import { Center, gender } from '../model/center';
import Adress from '../model/adress';
import AgeLimit from '../model/age_limit';
import WorkingHours from '../model/working_hours';

import { CATAGORIES } from '../mocks/center_classification';

const ALL = gender.ALL,
    MALE = gender.MALE,
    FEMALE = gender.FEMALE;


export const CENTERS = {
    //Gadeteamet
    gadeteamet: new Center(
        new Adress('Boulevarden 19', 'Aalborg', '9000'),
        {
            ACCOMODATION: CATAGORIES.ACCOMODATION.description,
            GUIDANCE: CATAGORIES.ACCOMODATION.subCatagories.GUIDANCE.description
        },
        new WorkingHours(
            '09:00',
            '09:00',
            '09:00',
            '09:00',
            '09:00',
            null,
            null
        ),
        new WorkingHours(
            '16:00',
            '16:00',
            '16:00',
            '16:00',
            '16:00',
            null,
            null
        ),
        null,
        null,
        'Gadeteamet',
        `
        Her kan du modtage hjælp til kontakt til offentlige 
        myndigheder der er tilknyttet en gadesygeplejerske, 
        som har mulighed for at tilse dig eller hjælpe dig på sygehuset
        `,
        false,
        ALL,
        new AgeLimit(0, 999),
        null,
        null,

        ['98317755']
    ),
    //Cafe VæXt
    cafe_vaext: new Center(
        new Adress(
            'Poul Paghs Gade 6 a, 1. sal',
            'Aalborg',
            '9000',
        ),
        {
            SOCIALIZING: CATAGORIES.SOCIALIZING.description,
            EX_ADDICT: CATAGORIES.SOCIALIZING.subCatagories.EX_ADDICT.description,
        },
        new WorkingHours(
            '11:00',
            '11:00',
            '11:00',
            '11:00',
            '11:00',
            null,
            null
        ),
        new WorkingHours(
            '15:30',
            '17:30',
            '17:30',
            '17:30',
            '15:30',
            null,
            null
        ),
        new WorkingHours(
            '10:00',
            '10:00',
            '10:00',
            '10:00',
            '10:00',
            null,
            null
        ),
        new WorkingHours(
            '15:00',
            '15:00',
            '15:00',
            '17:00',
            '15:00',
            null,
            null
        ),
        'Cafe VæXt',
        `
        Her har du mulighed for at møde andre, 
        der tidligere har haft et misbrug. 
        Der er også mulighed for telefonisk vejledning.
        
        Caféen har forskellige tilbud så som: 
        Musik, foredrag, net café og billard.
            
        Der er en café, hvor du har mulighed for at købe 
        lidt mad: Dagens frokost og/eller håndmadder 
        mandag - torsdag fra kl. 12.00 til kl. 14.00.

        Du må ikke være påvirket af alkohol, stoffer 
        eller andre stemningsændrende midler.   
        `,
        false,
        ALL,
        new AgeLimit(
            0,
            999
        ),
        'cafevaext@aalborg.dk',
        null,
        ['98102618']
    ),
    //Det Grønlandske Hus
    det_groenlandske_hus: new Center(
        new Adress(
            'Ågade 9',
            'Aalborg',
            '9000',
        ),
        {
            SOCIALIZING: CATAGORIES.SOCIALIZING.description,
            GREENLANDIC: CATAGORIES.SOCIALIZING.subCatagories.GREENLANDIC.description
        },
        new WorkingHours(
            '09:00',
            '12:00',
            '09:00',
            '09:00',
            '09:00',
            null,
            null
        ),
        new WorkingHours(
            '15:30',
            '15:30',
            '15:30',
            '15:30',
            '15:00',
            null,
            null
        ),
        null,
        null,
        'Det Grønlandske Hus',
        `
        Et grønlandsk samlingssted(Tamassa), med 
        mulighed for at møde andre grønlændere. 

        Her har du mulighed for at få rådgivning om sociale, 
        personlige og praktiske ting. 

        Der vil være café-dage, sangkor og 
        kulturelle arrangementer
        `,
        false,
        ALL,
        new AgeLimit(
            0, 999
        ),
        'aalborg@dgh-aalborg.dk',
        'www.dgh-aalborg.dk',
        ['98146800']
    ),
    //Den Sociale Skadestue
    den_sociale_skadestue: new Center(
        new Adress(
            'Vor Frue Plads 6',
            'Aalborg',
            '9000',
        ),
        {
            ADVICE: CATAGORIES.ADVICE.description,
            NIGHT_TIME: CATAGORIES.ADVICE.subCatagories.NIGHT_TIME.description,
        },
        new WorkingHours(
            '18:00',
            '18:00',
            '18:00',
            '18:00',
            '18:00',
            null,
            null
        ),
        new WorkingHours(
            '07:00',
            '07:00',
            '07:00',
            '07:00',
            '07:00',
            null,
            null
        ),
        null,
        null,
        'Den Sociale Skadestue',
        `
        Du har mulighed for at modtage rådgivning 
        i aften/nat-timerne. 
 
        Det kan være f.eks. være omkring ensomhed, 
        samlivsproblemer, familieproblemer, 
        problemer på arbejdet/studiet, stress, angst, 
        selvmordstanker eller misbrugsproblemer. 
        
        Du kan også henvende dig, hvis du har været 
        udsat for vold eller en ulykke.
        `,
        false,
        ALL,
        new AgeLimit(
            0, 999
        ),
        null,
        'www.densocialeskadestue.dk',
        ['98123292']
    ),
    //Kvisten
    kvisten: new Center(
        new Adress(
            'Mølholmsvej 2',
            'Aalborg',
            '9000',
        ),
        {
            ADVICE: CATAGORIES.ADVICE.description,
            SEXUAL_ASSAULT: CATAGORIES.ADVICE.subCatagories.SEXUAL_ASSAULT.description
        },
        null,
        null,
        new WorkingHours(
            null,
            '17:00',
            null,
            null,
            null,
            null,
            null
        ),
        new WorkingHours(
            null,
            '20:00',
            null,
            null,
            null,
            null,
            null
        ),
        'Kvisten',
        `
        Hvis du har været udsat for seksuelle overgreb, 
        kan du henvende dig telefonisk eller på mail.  
 
        Du har mulighed for at få terapi 
        individuelt eller i grupper.
        `,
        false,
        ALL,
        new AgeLimit(
            18,
            999
        ),
        'aalborg@kvistene.dk',
        'http://www.kvistene.dk/',
        ['50542550']
    ),
    //Legal Aid - Retshjælp i Danmark
    legal_aid: new Center(
        new Adress(
            'Kattesundet 24, 1. sal',
            'Aalborg',
            '9000',
        ),
        {
            ADVICE: CATAGORIES.ADVICE.description,
            LEGAL: CATAGORIES.ADVICE.subCatagories.LEGAL.description
        },
        new WorkingHours(
            '11:00',
            '11:00',
            '11:00',
            '14:00',
            '11:00',
            null,
            null,
        ),
        new WorkingHours(
            '14:00',
            '14:00',
            '14:00',
            '17:00',
            '14:00',
            null,
            null,
        ),
        null,
        null,
        'Legal Aid - Retshjælp i Danmark',
        `
        Du kan modtage juridisk hjælp, dette kan foregå 
        gennem mundtlig juridisk rådgivning samt 
        skriftlig sagsbehandling. 

        Du kan f.eks. modtage hjælp til:  
        - Udforme klage til offentlig myndighed. 
        - Klage til udlejer 
        - Protesterer mod opsigelse i et ansættelsesforhold.
        `,
        true,
        ALL,
        new AgeLimit(
            0, 999
        ),
        'raadgivning@legal-aid.dk',
        'www.legal.aid.dk',
        ['32219095']
    ),
    //Misbrugsafsnittet
    misbrugsafsnittet: new Center(
        new Adress(
            'Badehusvej 1, 1. sal',
            'Aalborg',
            '9000',
        ),
        {
            ADDICTION: CATAGORIES.ADDICTION.description,
            TREATMENT: CATAGORIES.ADDICTION.subCatagories.TREATMENT.description
        },
        new WorkingHours(
            '09:00',
            null,
            '09:00',
            '13:00',
            null,
            null,
            null,
        ),
        new WorkingHours(
            '12:00',
            null,
            '12:00',
            '16:00',
            null,
            null,
            null,
        ),
        null,
        null,
        'Misbrugsafsnittet',
        `
        Du har mulighed for at henvende dig til en åben 
        rådgivning med henblik på at komme i behandling.

        Her vil du få råd og vejledning og høre om 
        Misbrugsafsnittets behandlingstilbud.

        Derfra kan du blive tilbudt en 
        udredningssamtale, hvorfra de kan udarbejde 
        en plan for behandling.
        `,
        true,
        ALL,
        new AgeLimit(
            18,
            999,
        ),
        'raadgivning@legal-aid.dk',
        'www.legal.aid.dk',
        ['32219095']
    ),
}


