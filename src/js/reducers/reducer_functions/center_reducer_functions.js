/**
 * Returns an array of centers
 * @param {Object} centers - Object with center objects within
 * @returns {Array}
 */
const getCenters = (centers) => {
    return Object.entries(centers).map(([key, val]) => {
        return val
    })
}

/**
 * Returns a list of centers filtered by age
 * @param {Object} centers - Object with Center objects within
 * @param {Number} age - age of user
 * @returns {Array}
 */
const filterCentersByAge = (centers, age) => {
    return getCenters(centers).reduce((acc, center) => {
        let lowerAge = center.ageLimit.lowerAge;
        let upperAge = center.ageLimit.upperAge;
        if (age >= lowerAge && age <= upperAge) {
            acc.push(center)
        }
        return acc;
    }, [])
}

/**
 * Returns a list of centers filtered by gender
 * @param {Array} centers - Array of Center objects within
 * @param {Number} gender - Gender of user where 1 = MALE and 2 = FEMALE
 * @returns {Array}
 */
const filterCentersByGender = (centers, gender) => {
    return centers.reduce((acc, center) => {
        //check if centers accepts the specific gender OR all genders
        if (center.gender === gender || center.gender === 0) {
            acc.push(center);
        }
        return acc;
    }, [])
}

/**
 * Returns a list of centers filtered by user
 * @param {Array} centers - Array of Center objects within
 * @param {Number} age - age of user
 * @param {Number} gender - Gender of user where 1 = MALE and 2 = FEMALE
 * @returns {Array}
 */
const filterCentersByUser = (centers, age, gender) => {
    return filterCentersByGender(filterCentersByAge(centers, age), gender);
}

/**
 * Returns a list of centers filtered by catagory
 * @param {String} selectedCatagory - the key of the selected catagory
 * @param {Object} centers - list of current centers to be filtered
 * @param {Number} catagoriesLevel - level of catagory in the catagory hierachy
 * @returns {Array} of centers
 */
const filterCentersByCatagory = (centers, selectedCatagory, catagoriesLevel) => {
    return centers.reduce((acc, center) => {
        //check if the center's catagory matches the selectedCatagory
        let centerCatagory = Object.keys(center.catagories)[catagoriesLevel];
        if (centerCatagory === selectedCatagory) {
            acc.push(center);
        }
        return acc;
    }, [])
}

/**
 * Filter centers by user info and catagory
 * @param {Array} centers - Array of Center objects within
 * @param {Number} age - age of user
 * @param {Number} gender - Gender of user where 1 = MALE and 2 = FEMALE
 * @param {String} selectedCatagory - the key of the selected catagory
 * @param {Number} catagoriesLevel - level of catagory in the catagory hierachy
 * @returns {Array} - filtered centers
 */
const filterCentersByUserAndCatagory = (centers, age, gender, selectedCatagory, catagoriesLevel) => {
    return filterCentersByCatagory(filterCentersByUser(centers, age, gender), selectedCatagory, catagoriesLevel)
}

/**
 * Returns an Object with unique catagory objects from the 'centers' Array
 * @param {Array} centers - Array of centers
 * @returns {Object} a unique list of catagories taken from the centers array
 */
const getCatagories = (centers, catagoriesLevel) => {
    return centers.reduce((acc, center) => {
        let [key, val] = Object.entries(center.catagories)[catagoriesLevel]
        if (key in acc) {
            //do nothing
        } else {
            acc[key] = val;
        }
        return acc;
    }, {})
}

export {getCatagories, filterCentersByUserAndCatagory, filterCentersByUser}