/**
 * Defines an adress of a rehabilitation Center
 * @param {string} street - the street name and number
 * @param {string} city - the city name
 * @param {string} postalCode - the postal code
 */

export default class Adress {
    constructor(street, city, postalCode){
        this.street = street;
        this.city = city;
        this.postalCode = postalCode;
    }
}