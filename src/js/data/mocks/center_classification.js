const CATAGORIES = {
    ADDICTION: {
        description: 'Misbrugsproblemer',
        subCatagories: {
            TREATMENT: {
                description: 'Behandling',
            },
            ALCOHOL_PROBLEMS: {
                description: 'Rådgivning til dig med alkoholproblemer'
            }
        }
    },
    SOCIALIZING: {
        description: 'Jeg mangler socialt samvær',
        subCatagories: {
            YOUTH: {
                description: 'Psykisk sårbare unge',
            },
            FORMER_FOSTERCARE: {
                description: 'Tidligere anbragt'
            },
            SHELTER: {
                description: 'Varmestue',
            },
            GREENLANDIC: {
                description: 'Grønlænder'
            },
            EX_ADDICT: {
                description: 'Eksmisbruger'
            },
        }
    },
    ADVICE: {
        description: 'Jeg har brug for rådgivning',
        subCatagories: {
            YOUTH: {
                description: 'Rådgivning til unge',
            },
            PROSTITUTION: {
                description: 'Jeg har været ude i prositution'
            },
            NIGHT_TIME: {
                description: 'Akut hjælp i nattetimerne',
            },
            LEGAL: {
                description: 'Juridisk hjælp'
            },
            PREGNANCY_ABORTION: {
                description: 'Gravid/abort problemer'
            },
            SEXUAL_ASSAULT: {
                description: 'Udsat for seksuelle overgreb'
            }
        }
    },
    ACTIVATION_EDUCATION: {
        description: 'Jeg mangler undervisning og/eller aktivering',
        subCatagories: {
            MENTAL_PROBLEMS: {
                description: 'Psykiske problemer',
            },
            GENERAL: {
                description: 'Diverse aktiviteter'
            },
            FARMING: {
                description: 'Gårdprojekt'
            },
            EDUCATION_HELP: {
                description: 'Jeg søger uddannelseshjælp'
            }
        }
    },
    ACCOMODATION: {
        description: 'Jeg har ingen steder at bo eller sove',
        subCatagories: {
            DOMESTIC_VIOLENCE: {
                description: 'Udsat for vold',
            },
            EMERGENCY_ACCOMODATION_ALL: {
                description: 'Akut overnatning dag + nat tilbud'
            },
            EMERGENCY_ACCOMODATION_NIGHT: {
                description: 'Akut overnatning nat tilbud'
            },
            EMERGENCY_ACCOMODATION_WOMEN: {
                description: 'Akut overnatning for kvinder'
            },
            GUIDANCE: {
                description: 'Akut overnatning dag + nat'
            },
        }
    },
    ECONOMIC_HELP: {
        description: 'Jeg søger kontanthjælp',
        subCatagories: {
            UNEMPLOYED: {
                description: 'TRIN 1: Meld dig ledig',
            },
            UNEMPLOYMENT_BENEFITS: {
                description: 'TRIN 2: Søg kontanthjælp '
            }
        }
    },
    MEDICAL_HELP: {
        description: 'Jeg mangler lægehjælp'
    },
    FOOD_AND_HYGIENE: {
        description: 'Jeg er sulten eller ønsker et bad',
        subCatagories: {
            FREE_BREAKFAST: {
                description: 'Gratis morgenmad',
            },
            CHEAP_FOOD_AND_BATH: {
                description: 'Billig mad, bad og tøj'
            },
            FREE_FOOD_AND_BATH: {
                description: 'Gratis mad, bad og rent tøj',
            },
            LAUNDRY: {
                description: 'Billig mad, gratis bad og tøjvask til 20 kr.'
            }
        }
    },
}

export { CATAGORIES };