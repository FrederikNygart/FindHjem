import { CENTERS } from './centers';

const CATAGORIES = {
    ACCOMODATION: {
        description: 'Jeg har ingen steder at bo eller sove',
        centers: [
            'gadeteamet',
            'kirkens_korshær_nat',
            'krisecenter_for_kvinder',
            'svenstrupgaard',
            'kirkens_korshær_herberg',

        ],
        subCatagories: {
            DOMESTIC_VIOLENCE: {
                description: 'Udsat for vold',
                centers: [
                    'krisecenter_for_kvinder',
                ],
            },
            EMERGENCY_ACCOMODATION_ALL: {
                description: 'Akut overnatning dag + nat tilbud',
                centers: [
                    'svenstrupgaard',
                    'kirkens_korshær_herberg'
                ],
            },
            EMERGENCY_ACCOMODATION_NIGHT: {
                description: 'Akut overnatning nat tilbud',
                centers: [
                    'kirkens_korshær_nat',
                ],
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
        centers: [
            'kildehuset',
            'gaardprojekt',
            'kofoed_skole',
        ],
        subCatagories: {
            MENTAL_PROBLEMS: {
                description: 'Psykiske problemer',
                centers: [
                    'kildehuset',
                ],
            },
            GENERAL: {
                description: 'Diverse aktiviteter',
                centers: [
                    'kofoed_skole',
                ],
            },
            FARMING: {
                description: 'Gårdprojekt',
                centers: [
                    'gaardprojekt',
                ],
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
            'iogt_aalborg',
            'misbrugsafsnittet',
        ],
        subCatagories: {
            TREATMENT: {
                description: 'Behandling',
                centers: [
                    'misbrugsafsnittet',
                ],
            },
            ALCOHOL_PROBLEMS: {
                description: 'Rådgivning til dig med alkoholproblemer',
                centers: [
                    'iogt_aalborg',
                ],
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
            'reden_aalborg',
            'ungeraadgivningen',
            'headspace',
            'midtbysjakket',
        ],
        subCatagories: {
            YOUTH: {
                description: 'Rådgivning til unge',
                centers: [
                    'ungeraadgivningen',
                    'headspace',
                    'midtbysjakket',
                ],
            },
            PROSTITUTION: {
                description: 'Jeg har været ude i prositution',
                centers: [
                    'reden_aalborg',
                ],
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
        centers: [
            'jobcenter',
            'ydelses_og_socialcentret',
        ],
        subCatagories: {
            UNEMPLOYED: {
                description: 'TRIN 1: Meld dig ledig',
                centers: [
                    'jobcenter'
                ],
            },
            UNEMPLOYMENT_BENEFITS: {
                description: 'TRIN 2: Søg kontanthjælp ',
                centers: [
                    'ydelses_og_socialcentret'
                ],
            }
        }
    },
    FOOD_AND_HYGIENE: {
        description: 'Jeg er sulten eller ønsker et bad',
        centers: [
            'cafe_parasollen',
            'hjerterummet',
            'frelsens_haer_varmestue',
            'kirkens_korshær_nrs',
            'kirkens_korshær',
        ],
        subCatagories: {
            FREE_BREAKFAST: {
                description: 'Gratis morgenmad',
                centers: [
                    'frelsens_haer_varmestue',
                ],
            },
            CHEAP_FOOD_AND_BATH: {
                description: 'Billig mad, bad og tøj',
                centers: [
                    'kirkens_korshær_nrs',
                    'kirkens_korshær',
                ],
            },
            FREE_FOOD_AND_BATH: {
                description: 'Gratis mad, bad og rent tøj',
                centers: [
                    'hjerterummet',
                ],
            },
            LAUNDRY: {
                description: 'Billig mad, gratis bad og tøjvask til 20 kr.',
                centers: [
                    'cafe_parasollen',
                ],
            }
        }
    },
    MEDICAL_HELP: {
        description: 'Jeg mangler lægehjælp',
        centers: [
            'vagtlaegen',
        ],
        subCatagories: {
        }
    },
    SOCIALIZING: {
        description: 'Jeg mangler socialt samvær',
        centers: [
            'cafe_parasollen',
            'hjerterummet',
            'frelsens_haer_varmestue',
            'cafe_vaext',
            'det_groenlandske_hus',
            'kirkens_korshær_nrs',
            'kirkens_korshær',
            'baglandet',
            'kofoed_skole',
        ],
        subCatagories: {
            YOUTH: {
                description: 'Psykisk sårbare unge',
                centers: []
            },
            FORMER_FOSTERCARE: {
                description: 'Tidligere anbragt',
                centers: [
                    'baglandet'
                ]
            },
            SHELTER: {
                description: 'Varmestue',
                centers: [
                    'cafe_parasollen',
                    'hjerterummet',
                    'frelsens_haer_varmestue',
                    'kirkens_korshær_nrs',
                    'kirkens_korshær',
                ]
            },
            GREENLANDIC: {
                description: 'Grønlænder',
                centers: [
                    'det_groenlandske_hus',
                    'kofoed_skole',
                ]
            },
            EX_ADDICT: {
                description: 'Eksmisbruger',
                centers: [
                    'cafe_vaext',
                ]
            },
        }
    },
}

export { CATAGORIES };