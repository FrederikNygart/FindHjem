//Genders accepted by the center
const gender = {
    'ALL': 0,
    'MALE': 1,
    'FEMALE': 2,
}

/**
 * Defines a Center for rehabilitation 
 * @param {Adress} adress - the adress of the Center  
 * @param {Array} tags - a list of tags that describes the Center
 * @param {WorkingHours} centerOpening - the opening hours of the Center
 * @param {WorkingHours} centerClosing - the closing hours of the Center
 * @param {WorkingHours} phoneOpening - the Center's phone opening hours
 * @param {WorkingHours} phoneClosing - the Center's phone closing hours
 * @param {string} name - the Center's name
 * @param {string} description - a description of the center
 * @param {boolean} intoxication - the Center allows intoxication persons to be recieved
 * @param {number} gender - the accepted genders 
 * @param {AgeLimit} ageLimit - the age limit of the Center
 * @param {string} email - the e-mail 
 * @param {string} website - the website 
 * @param {Array} phoneNumbers - the Centers phone numbers 
 */
class Center {

    constructor(
        adress, 
        tags = [], 
        centerOpening, 
        centerClosing,
        phoneOpening,
        phoneClosing,
        name, 
        description,
        intoxication,
        gender, 
        ageLimit, 
        email = null,
        website = null, 
        phoneNumbers
        ){
            this.adress = adress;
            this.tags = tags;
            this.centerOpening = centerOpening;
            this.centerClosing = centerClosing;
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
