import { CENTERS } from './centers';

const CATAGORIES = {
    ACCOMODATION: {
        description: 'Jeg har ingen steder at bo eller sove',
        centers: [
            'gadeteamet',

        ],
        subCatagories: {
            DOMESTIC_VIOLENCE: {
                description: 'Udsat for vold',
                centers: [],
            },
            EMERGENCY_ACCOMODATION_ALL: {
                description: 'Akut overnatning dag + nat tilbud',
                centers: [],
            },
            EMERGENCY_ACCOMODATION_NIGHT: {
                description: 'Akut overnatning nat tilbud',
                centers: [],
            },
            EMERGENCY_ACCOMODATION_WOMEN: {
                description: 'Akut overnatning for kvinder',
                centers: [],
            },
            GUIDANCE: {
                description: 'vejledning',
                centers: [
                    'gadeteamet',
                ],
            },
        }
    },
    ACTIVATION_EDUCATION: {
        description: 'Jeg mangler undervisning og/eller aktivering',
        centers: [],
        subCatagories: {
            MENTAL_PROBLEMS: {
                description: 'Psykiske problemer',
                centers: [],
            },
            GENERAL: {
                description: 'Diverse aktiviteter',
                centers: [],
            },
            FARMING: {
                description: 'Gårdprojekt',
                centers: [],
            },
            EDUCATION_HELP: {
                description: 'Jeg søger uddannelseshjælp',
                centers: [],
            }
        }
    },
    ADDICTION: {
        description: 'Misbrugsproblemer',
        centers: [
        ],
        subCatagories: {
            TREATMENT: {
                description: 'Behandling',
                centers: [

                ],
            },
            ALCOHOL_PROBLEMS: {
                description: 'Rådgivning til dig med alkoholproblemer',
                centers: [],
            }
        }
    },
    ADVICE: {
        description: 'Jeg har brug for rådgivning',
        centers: [
            'den_sociale_skadestue',
            'kvisten',
            'legal_aid',
            'moedrehjaelpen',
            'nattjenesten',
        ],
        subCatagories: {
            YOUTH: {
                description: 'Rådgivning til unge',
                centers: [],
            },
            PROSTITUTION: {
                description: 'Jeg har været ude i prositution',
                centers: [],
            },
            NIGHT_TIME: {
                description: 'Akut hjælp i nattetimerne',
                centers: [
                    'den_sociale_skadestue',
                    'nattjenesten'
                ],
            },
            LEGAL: {
                description: 'Juridisk hjælp',
                centers: [
                    'legal_aid'
                ],
            },
            PREGNANCY_ABORTION: {
                description: 'Gravid/abort problemer',
                centers: [
                    'moedrehjaelpen',
                ],
            },
            SEXUAL_ASSAULT: {
                description: 'Udsat for seksuelle overgreb',
                centers: [
                    'kvisten'
                ],
            }
        }
    },
    ECONOMIC_HELP: {
        description: 'Jeg søger kontanthjælp',
        centers: [],
        subCatagories: {
            UNEMPLOYED: {
                description: 'TRIN 1: Meld dig ledig',
                centers: [],
            },
            UNEMPLOYMENT_BENEFITS: {
                description: 'TRIN 2: Søg kontanthjælp ',
                centers: [],
            }
        }
    },
    FOOD_AND_HYGIENE: {
        description: 'Jeg er sulten eller ønsker et bad',
        centers: [],
        subCatagories: {
            FREE_BREAKFAST: {
                description: 'Gratis morgenmad',
                centers: [],
            },
            CHEAP_FOOD_AND_BATH: {
                description: 'Billig mad, bad og tøj',
                centers: [],
            },
            FREE_FOOD_AND_BATH: {
                description: 'Gratis mad, bad og rent tøj',
                centers: [],
            },
            LAUNDRY: {
                description: 'Billig mad, gratis bad og tøjvask til 20 kr.',
                centers: [],
            }
        }
    },
    MEDICAL_HELP: {
        description: 'Jeg mangler lægehjælp',
        centers: [],
        subCatagories: {
        }
    }, 
    SOCIALIZING: {
        description: 'Jeg mangler socialt samvær',
        centers: [],
        subCatagories: {
            YOUTH: {
                description: 'Psykisk sårbare unge',
                centers: []
            },
            FORMER_FOSTERCARE: {
                description: 'Tidligere anbragt',
                centers: []
            },
            SHELTER: {
                description: 'Varmestue',
                centers: []
            },
            GREENLANDIC: {
                description: 'Grønlænder',
                centers: []
            },
            EX_ADDICT: {
                description: 'Eksmisbruger',
                centers: [
                ]
            },
        }
    },
}

export { CATAGORIES };