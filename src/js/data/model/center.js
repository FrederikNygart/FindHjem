//Genders accepted by the center
const gender = {
    'ALL': 0,
    'MALE': 1,
    'FEMALE': 2,
}

/**
 * Defines a Center for rehabilitation 
 * @param {Adress} adress - the adress of the Center  
 * @param {Array} catagories - a list of tags that describes the Center
 * @param {Array} centerOpening - the openinghours of the Center
 * @param {Array} phoneOpening - the Center's phone openinghours
 * @param {String} name - the Center's name
 * @param {String} description - a description of the center
 * @param {Boolean} intoxication - the Center allows intoxication persons to be recieved
 * @param {Number} gender - the accepted genders 
 * @param {AgeLimit} ageLimit - the age limit of the Center
 * @param {String} email - the e-mail 
 * @param {String} website - the website 
 * @param {Array} phoneNumbers - the Centers phone numbers 
 */
class Center {
    constructor(
        adress,
        catagories = [],
        centerOpening,
        phoneOpening,
        name,
        description,
        intoxication,
        gender,
        ageLimit,
        email = null,
        website = null,
        phoneNumbers
    ) {
        this.adress = adress;
        this.catagories = catagories;
        this.centerOpening = centerOpening;
        this.phoneOpening = phoneOpening;
        this.name = name;
        this.description = description;
        this.intoxication = intoxication;
        this.gender = gender;
        this.ageLimit = ageLimit;
        this.email = email;
        this.website = website;
        this.phoneNumbers = phoneNumbers;
    }

}

export { Center, gender };
