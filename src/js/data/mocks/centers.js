import {Center, gender} from '../model/center';
import AgeLimit from '../model/age_limit';
import Adress from '../model/adress';

const ALL = gender.ALL,
    MALE = gender.MALE,
    FEMALE = gender.FEMALE

export default centers = [
    new Center(
        new Adress('Boulevarden 19', 'Aalborg', '9000'),
        ['Mangler bolig'],
        {
            'MONDAY': '09:00',
            'TUESDAY': '09:00',
            'WEDNESDAY': '09:00',
            'THURSDAY': '09:00',
            'FRIDAY': '09:00',
            'SATURDAY': null,
            'SUNDAY': null
        },
        {
            'MONDAY': '16:00',
            'TUESDAY': '16:00',
            'WEDNESDAY': '16:00',
            'THURSDAY': '16:00',
            'FRIDAY': '16:00',
            'SATURDAY': null,
            'SUNDAY': null
        },
        'Gadeteamet',
        'Her kan du modtage hjælp til kontakt til offentlige myndigheder er er tilknyttet en gadesygeplejerske, som har mulighed for at tilse dig eller hjælpe dig på sygehuset',
        ALL,
        new AgeLimit(null, null),
        null,
        null,
        '98317755'
    ),
    new Center(
        new Adress('Boulevarden 19', 'Aalborg', '9000'),
        ['Mangler bolig'],
        {
            'MONDAY': '09:00',
            'TUESDAY': '09:00',
            'WEDNESDAY': '09:00',
            'THURSDAY': '09:00',
            'FRIDAY': '09:00',
            'SATURDAY': null,
            'SUNDAY': null
        },
        {
            'MONDAY': '16:00',
            'TUESDAY': '16:00',
            'WEDNESDAY': '16:00',
            'THURSDAY': '16:00',
            'FRIDAY': '16:00',
            'SATURDAY': null,
            'SUNDAY': null
        },
        'Gadeteamet',
        'Her kan du modtage hjælp til kontakt til offentlige myndigheder er er tilknyttet en gadesygeplejerske, som har mulighed for at tilse dig eller hjælpe dig på sygehuset',
        ALL,
        new AgeLimit(null, null),
        null,
        null,
        '98317755'
    ),
];
