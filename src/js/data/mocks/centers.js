import { Center, gender } from '../model/center';
import Adress from '../model/adress';
import AgeLimit from '../model/age_limit';
import WorkingHours from '../model/working_hours';

import { CATAGORIES } from './center_classification';
import descriptions from './center_descriptions'

const ALL = gender.ALL,
    MALE = gender.MALE,
    FEMALE = gender.FEMALE;


export const CENTERS = {
    gadeteamet: new Center(
        new Adress('Boulevarden 19', 'Aalborg', '9000'),
        {
            ACCOMODATION: CATAGORIES.ACCOMODATION.description,
            GUIDANCE: CATAGORIES.ACCOMODATION.subCatagories.GUIDANCE.description
        },
        [
            null,
            ['09:00', '16:00'],
            ['09:00', '16:00'],
            ['09:00', '16:00'],
            ['09:00', '16:00'],
            ['09:00', '16:00'],
            null,
        ],
        null,
        'Gadeteamet',
        descriptions.gadeteamet,
        false,
        ALL,
        new AgeLimit(0, 999),
        null,
        null,

        ['98317755']
    ),
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
        [
            null,
            ['18:00', '07:00'],
            ['18:00', '07:00'],
            ['18:00', '07:00'],
            ['18:00', '07:00'],
            ['18:00', '07:00'],
            null,
        ],
        null,
        'Den Sociale Skadestue',
        descriptions.den_sociale_skadestue,
        false,
        ALL,
        new AgeLimit(
            0, 999
        ),
        null,
        'www.densocialeskadestue.dk',
        ['98123292']
    ),
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
        [
            null,
            null,
            ['17:00', '20:00'],
            null,
            null,
            null,
            null,
        ],
        'Kvisten',
        descriptions.kvisten,
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
        [
            null,
            ['11:00', '14:00',],
            ['11:00', '14:00',],
            ['11:00', '14:00',],
            ['14:00', '17:00',],
            ['11:00', '14:00',],
            null,
        ],
        null,
        'Legal Aid - Retshjælp i Danmark',
        descriptions.legal_aid,
        true,
        ALL,
        new AgeLimit(
            0, 999
        ),
        'raadgivning@legal-aid.dk',
        'www.legal.aid.dk',
        ['32219095']
    ),
    moedrehjaelpen: new Center(
        new Adress(
            'Boulevarden 30',
            'Aalborg',
            '9000',
        ),
        {
            ADVICE: CATAGORIES.ADVICE.description,
            PREGNANCY_ABORTION: CATAGORIES.ADVICE.subCatagories.PREGNANCY_ABORTION.description
        },
        [
            null,
            ['09:00', '15:00',],
            ['09:00', '15:00',],
            ['09:00', '15:00',],
            ['09:00', '17:30',],
            ['09:00', '13:00',],
            null,
        ],
        null,
        'Mødrehjælpen',
        descriptions.moedrehjaelpen,
        false,
        FEMALE,
        new AgeLimit(
            0,
            30,
        ),
        'aalborg@moedrehjaelpen.dk',
        'www.moedrehjaelpen.dk',
        ['69133200']
    ),
    nattjenesten: new Center(
        null,
        {
            ADVICE: CATAGORIES.ADVICE.description,
            NIGHT_TIME: CATAGORIES.ADVICE.subCatagories.NIGHT_TIME.description
        },
        null,
        [
            ['16:00', '08:00',],
            ['16:00', '08:00',],
            ['16:00', '08:00',],
            ['16:00', '08:00',],
            ['16:00', '08:00',],
            ['16:00', '08:00',],
            ['16:00', '08:00',],
        ],
        'Nattjenesten',
        descriptions.nattjenesten,
        true,
        ALL,
        new AgeLimit(
            0,
            999,
        ),
        null,
        null,
        ['70122111']
    ),
    reden_aalborg: new Center(
        new Adress(
            'Danmarksgade 52',
            'Aalborg',
            '9000',
        ),
        {
            ADVICE: CATAGORIES.ADVICE.description,
            PROSTITUTION: CATAGORIES.ADVICE.subCatagories.PROSTITUTION.description
        },
        [
            null,
            null,
            ['14:00', '17:00',],
            null,
            ['14:00', '20:00',],
            null,
            null,
        ],
        null,
        'Reden Aalborg',
        descriptions.reden_aalborg,
        false,
        ALL,
        new AgeLimit(
            0,
            999,
        ),
        'jk@redenaalborg.dk',
        'www.redenaalborg.dk',
        ['40925565', '53753033']
    ),
    ungeraadgivningen: new Center(
        new Adress(
            'Jernbanegade 23',
            'Aalborg',
            '9000',
        ),
        {
            ADVICE: CATAGORIES.ADVICE.description,
            YOUTH: CATAGORIES.ADVICE.subCatagories.YOUTH.description
        },
        [
            null,
            ['08:00', '15:00',],
            ['08:00', '15:00',],
            ['08:00', '16:00',],
            ['08:00', '16:00',],
            ['08:00', '15:00',],
            null,
        ],
        null,
        'Ungerådgivninger',
        descriptions.ungeraadgivningen,
        false,
        ALL,
        new AgeLimit(
            12,
            26,
        ),
        'ungerådgivningen.uc@aalborg.dk',
        null,
        ['99315750']
    ),
    cafe_parasollen: new Center(
        new Adress(
            'Boulevarden 19',
            'Aalborg',
            '9000',
        ),
        {
            SOCIALIZING: CATAGORIES.SOCIALIZING.description,
            SHELTER: CATAGORIES.SOCIALIZING.subCatagories.SHELTER.description
        },
        [
            null,
            ['10:00', '19:00',],
            ['10:00', '19:00',],
            ['10:00', '19:00',],
            ['10:00', '16:00',],
            ['10:00', '14:00',],
            null,
        ],
        null,
        'Cafe Parasollen',
        descriptions.cafe_parasollen,
        true,
        ALL,
        new AgeLimit(
            0,
            999,
        ),
        'boil@kfumsoc.dk',
        'www.cafeparasollen.dk',
        ['98109266']
    ),
    hjerterummet: new Center(
        new Adress(
            'Østerbro 20',
            'Aalborg',
            '9000',
        ),
        {
            SOCIALIZING: CATAGORIES.SOCIALIZING.description,
            SHELTER: CATAGORIES.SOCIALIZING.subCatagories.SHELTER.description
        },
        [
            ['16:00', '21:00',],
            ['17:00', '21:00',],
            ['17:00', '21:00',],
            ['17:00', '21:00',],
            ['17:00', '21:00',],
            ['16:00', '21:00',],
            null,
        ],
        null,
        'Den Sociale Cafe Hjerterummet',
        descriptions.hjerterummet,
        true,
        ALL,
        new AgeLimit(
            0,
            999,
        ),
        'hjerterumet@blaakors.dk',
        'www.hjerterummet.dk',
        ['61241450']
    ),
    frelsens_haer_varmestue: new Center(
        new Adress(
            'Skipper Clements Gade 11',
            'Aalborg',
            '9000',
        ),
        {
            SOCIALIZING: CATAGORIES.SOCIALIZING.description,
            SHELTER: CATAGORIES.SOCIALIZING.subCatagories.SHELTER.description
        },
        [
            null,
            ['07:30', '11:30',],
            ['07:30', '11:30',],
            ['07:30', '11:30',],
            ['07:30', '11:30',],
            ['07:30', '11:30',],
            null,
        ],
        null,
        'Frelsens Hær Varmestue',
        descriptions.frelsens_haer_varmestue,
        false,
        ALL,
        new AgeLimit(
            0,
            999,
        ),
        'moellepladscentret@fhmai.dk',
        null,
        ['98115162']
    ),
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
        [
            null,
            ['11:00', '15:30'],
            ['11:00', '17:30'],
            ['11:00', '17:30'],
            ['11:00', '17:30'],
            ['11:00', '15:30'],
            null,

        ],
        [
            null,
            ['10:00', '15:00'],
            ['10:00', '15:00'],
            ['10:00', '15:00'],
            ['10:00', '17:00'],
            ['10:00', '15:00'],
            null,
        ],
        'Cafe VæXt',
        descriptions.cafe_vaext,
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
        [
            null,
            ['09:00', '15:30'],
            ['12:00', '15:30'],
            ['09:00', '15:30'],
            ['09:00', '15:30'],
            ['09:00', '15:00'],
            null,
        ],
        null,
        'Det Grønlandske Hus',
        descriptions.det_grondlandske_hus,
        false,
        ALL,
        new AgeLimit(
            0, 999
        ),
        'aalborg@dgh-aalborg.dk',
        'www.dgh-aalborg.dk',
        ['98146800']
    ),
    iogt_aalborg: new Center(
        new Adress(
            'Anders Mørchs vej 2, 1. th.',
            'Nørresundby',
            '9400',
        ),
        {
            ADDICTION: CATAGORIES.ADDICTION.description,
            ALCOHOL_PROBLEMS: CATAGORIES.ADDICTION.subCatagories.ALCOHOL_PROBLEMS.description
        },
        [
            null,
            ['10:00', '14:00',],
            ['10:00', '14:00',],
            ['10:00', '14:00',],
            ['10:00', '14:00',],
            ['10:00', '14:00',],
            null,
        ],
        null,
        'IOGT - Aalborg',
        descriptions.iogt_aalborg,
        true,
        ALL,
        new AgeLimit(
            0,
            999,
        ),
        'aalborg@iogt.dk',
        null,
        ['98137577']
    ),
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
        [
            null,
            ['09:00', '12:00',],
            null,
            ['09:00', '12:00',],
            ['13:00', '16:00',],
            null,
            null,
        ],
        null,
        'Misbrugsafsnittet',
        descriptions.misbrugsafsnittet,
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
    kirkens_korshær_nat: new Center(
        new Adress(
            'Søndergade 14',
            'Aalborg',
            '9000',
        ),
        {
            ACCOMODATION: CATAGORIES.ACCOMODATION.description,
            SHELTER: CATAGORIES.ACCOMODATION.subCatagories.EMERGENCY_ACCOMODATION_NIGHT.description
        },
        [
            ['21:00', '07:00',],
            ['21:00', '07:00',],
            ['21:00', '07:00',],
            ['21:00', '07:00',],
            ['21:00', '07:00',],
            ['21:00', '07:00',],
            ['21:00', '07:00',],
        ],
        null,
        'Kirkens Korshærs Natvarmestue',
        descriptions.kirkens_korshær_nat,
        true,
        ALL,
        new AgeLimit(
            0,
            999,
        ),
        'natvarmestueaalborg@kirkenskorshaer.dk',
        null,
        ['98132011', '21132038']
    ),
    kirkens_korshær_nrs: new Center(
        new Adress(
            'Østerbrogade 56, 1. sal',
            'Nørresundby',
            '9400',
        ),
        {
            SOCIALIZING: CATAGORIES.SOCIALIZING.description,
            SHELTER: CATAGORIES.SOCIALIZING.subCatagories.SHELTER.description
        },
        [
            ['09:00', '15:00',],
            ['09:00', '15:00',],
            ['09:00', '15:00',],
            ['09:00', '15:00',],
            ['09:00', '15:00',],
            ['09:00', '15:00',],
            null,
        ],
        null,
        'Kirkens Korshærs varmestue i Nørresundby',
        descriptions.kirkens_korshær_nrs,
        true,
        ALL,
        new AgeLimit(
            0,
            999,
        ),
        'norresundby@kirkenskorshaer.dk',
        null,
        ['98189437']
    ),
    kirkens_korshær: new Center(
        new Adress(
            'Søndergade 14',
            'Aalborg',
            '9000',
        ),
        {
            SOCIALIZING: CATAGORIES.SOCIALIZING.description,
            SHELTER: CATAGORIES.SOCIALIZING.subCatagories.SHELTER.description
        },
        [
            ['09:00', '15:00',],
            ['09:00', '15:00',],
            ['09:00', '15:00',],
            ['09:00', '15:00',],
            ['09:00', '15:00',],
            ['09:00', '15:00',],
            ['09:00', '15:00',],
        ],
        null,
        'Kirkens Korshærs varmestue',
        descriptions.kirkens_korshær,
        true,
        ALL,
        new AgeLimit(
            0,
            999,
        ),
        'varmestueaalborg@kirkenskorshaer.dk',
        null,
        ['98139437']
    ),
    kildehuset: new Center(
        new Adress(
            'Anders Mørchs Vej 1',
            'Nørresundby',
            '9400',
        ),
        {
            ACTIVATION_EDUCATION: CATAGORIES.ACTIVATION_EDUCATION.description,
            MENTAL_PROBLEMS: CATAGORIES.ACTIVATION_EDUCATION.subCatagories.MENTAL_PROBLEMS.description
        },
        [
            null,
            ['08:00', '15:30',],
            ['08:00', '15:30',],
            ['08:00', '15:30',],
            ['08:00', '15:30',],
            ['08:00', '15:00',],
            null,
        ],
        null,
        'Kildehuset - Fountaen house',
        descriptions.kildehuset,
        false,
        ALL,
        new AgeLimit(
            18,
            999,
        ),
        'kildehuset@aalborg.dk',
        'www.kildehuset-fountainhouse.dk',
        ['99316000']
    ),
    gaardprojekt: new Center(
        new Adress(
            'Nørkæret 75',
            'Klarup',
            '9270',
        ),
        {
            ACTIVATION_EDUCATION: CATAGORIES.ACTIVATION_EDUCATION.description,
            FARMING: CATAGORIES.ACTIVATION_EDUCATION.subCatagories.FARMING.description
        },
        [
            null,
            ['09:00', '15:00',],
            ['09:00', '15:00',],
            ['09:00', '15:00',],
            ['09:00', '15:00',],
            ['09:00', '15:00',],
            null,
        ],
        null,
        'Kirkens Korshærs gårdprojekt i Klarup',
        descriptions.gaardprojekt,
        false,
        ALL,
        new AgeLimit(
            0,
            999,
        ),
        'gaardprojektet@kirkenskorshaer.dk',
        null,
        ['98317454']
    ),
}


