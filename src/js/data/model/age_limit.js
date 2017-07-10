/**
 * defines the age limit
 * @param {number} lowerAge - the lower limit
 * @param {number} upperAge - the upper limit  
 */
export default class AgeLimit {
    constructor(lowerAge, upperAge){
        this.lowerAge = lowerAge;
        this.upperAge = upperAge;
    }
}