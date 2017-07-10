//Genders accepted by the center
const gender = {
    'ALL': 0,
    'MALE': 1,
    'FEMALE': 2,
}

/**
 * Defines a Center for rehabilitation 
 * @param {Adress}      adress          - the adress of the Center  
 * @param {Array}       tags            - a list of tags that describes the Center
 * @param {Object}      openingHours    - the opening hours of the Center
 * @param {Object}      closingHours    - the closing hours of the Center
 * @param {string}      name            - the Center's name
 * @param {string}      description     - a description of the center
 * @param {number}      gender          - the accepted genders 
 * @param {AgeLimit}    ageLimit        - the age limit of the Center
 * @param {string}      email           - the e-mail 
 * @param {string}      website         - the website 
 * @param {string}      phoneNumber     - the phone number 
 */
class Center {

    constructor(
        adress,
        tags = [],
        openingHours,
        closingHours,
        name,
        description,
        gender,
        ageLimit,
        email = null,
        website = null,
        phoneNumber
    ) {
        this.adress = adress;
        this.tags = tags;
        this.openingHours = openingHours;
        this.closingHours = closingHours;
        this.name = name;
        this.description = description;
        this.gender = gender;
        this.ageLimit = ageLimit;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

}

export { Center, gender };