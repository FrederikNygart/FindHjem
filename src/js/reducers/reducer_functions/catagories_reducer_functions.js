/**
 * Returns an Object with Center Objects filtered by age
 * @param {Object} centers - Object with Center objects within
 * @param {Number} age - age of user
 * @returns {Object} - with Center Objects filtered by user's age within
 */
const filterCentersByAge = (centers, age) => {
    let filteredCenters = Object.entries(centers).reduce((acc, [key, center]) => {
        let lowerAge = center.ageLimit.lowerAge;
        let upperAge = center.ageLimit.upperAge;
        if (age >= lowerAge && age <= upperAge) {

            acc[key] = center;
        }
        return acc;
    }, {});
    return filteredCenters
}

/**
 * Returns an Object with Center Objects filtered by gender
 * @param {Array} centers - Array of Center objects within
 * @param {Number} gender - Gender of user where 1 = MALE and 2 = FEMALE
 * @returns {Object} - with Center Objects filtered by user's gender within
 */
const filterCentersByGender = (centers, gender) => {
    let filteredCenters = Object.entries(centers).reduce((acc, [key, center]) => {
        //check if centers accepts the specific gender OR all genders
        if (center.gender === gender || center.gender === 0) {
            acc[key] = center;
        }
        return acc;
    }, {});
    return filteredCenters
}

/**
 * Returns the key from an Object with Center Objects
 * @param {Object} centers - Object with Center Objects
 * @returns {Array[Array<String>][Array<String>]} - with centerKeys and centerNames
 */
const getCenters = (centers) => {
    return Object.entries(centers).reduce((acc, [key, val]) => {
        acc[0].push(key);
        acc[1].push(val.name);
        return acc;
    }, [[], []])
}

/**
 * Returns Array of center keys filtered by user credentials, age and gender
 * @param {Object} centers - Object with Center objects within
 * @param {Number} age - age of user
 * @param {Number} gender - Gender of user where 1 = MALE and 2 = FEMALE
 * @returns {Array} - with Center keys filtered by age and gender 
 */
const filterCentersByUser = (centers, userAge, userGender) => {
    let filteredCenters = filterCentersByGender(filterCentersByAge(centers, userAge), userGender)
    return getCenters(filteredCenters);
}

/**
 * 
 * @param {Object} catagories 
 * @param {Array<String>} selectedCatagories 
 */
const getCenterKeysFromCatagories = (catagories, selectedCatagories) => {
    let centers;
    switch (selectedCatagories.length) {
        case 0:
            centers = Object.values(catagories).map((val) => {
                let center = [];
                for (let i = 0; val.centers.length > i; i++) {
                    if (val.centers[i] !== undefined)
                        center.push(val.centers[i]);
                }
                return center
            })
            centers = [].concat.apply([], centers)
            break;
        case 1:
            let catagory = selectedCatagories[0]
            centers = catagories[catagory].centers.reduce((acc, val) => {
                console.log('val', val)
                acc.push(val)
                console.log('acc', acc)
                return acc;
            }, [])
            console.log('centers', centers)
            break;
        case 2:
            let
                firstCatagory = selectedCatagories[0],
                secondCatagory = selectedCatagories[1];
            centers =
                Object.values(catagories[firstCatagory].subCatagories[secondCatagory].centers)
                    .map((center) => {
                        return center;
                    });
            break;
        default:
            centers = [];
            break;
    }
    return centers
}

/**
 * Returns Center Objects from keys
 * @param {Object} centers 
 * @param {Array<String>} keys 
 */
const getCentersByKeys = (centers, keys) => {
    return Object.entries(centers).reduce((acc, [centerKey, center]) => {
        keys.forEach((key) => {
            if (centerKey === key) {
                console.log('centerKey', centerKey)
                console.log('key', key)
                acc[centerKey] = center
            }
        })
        return acc;
    }, {})
}

/**
 * Returns Object of Center Objects filtered by catagory
 * @param {Object} centers - Object with Center objects within
 * @param {Object} catagories - Object { 'catagory1':{'catagory1A': {...}}, 'catagory2':{...}}
 * @param {Array<String>} selectedCatagories 
 */
const filterCentersByCatagory = (centers, catagories, selectedCatagories) => {
    let centerKeysFilteredByCatagories = getCenterKeysFromCatagories(catagories, selectedCatagories)
    return getCentersByKeys(centers, centerKeysFilteredByCatagories)
}

/**
 * Returns Array of Center keys filtered  by catagory and user credentials, age and gender
 * @param {Object} centers - Object with Center objects within
 * @param {Object} catagories 
 * @param {Array<String>} selectedCatagories 
 * @param {Number} userAge 
 * @param {Number} userGender 
 * @returns {Array} - with Center keys filtered by catagory, age and gender 
 */
const filterCentersByCatagoryAndUser = (centers, catagories, selectedCatagories, userAge, userGender) => {
    //Returns a list of centers filtered 
    let
        centersFilteredByCatagory =
            filterCentersByCatagory(
                centers,
                catagories,
                selectedCatagories
            ),
        filteredCenters =
            filterCentersByUser(
                centersFilteredByCatagory,
                userAge,
                userGender
            );
    return filteredCenters

}

/**
 * Returns an Object in the format { catagoryKey: catagoryDescription, ... }
 * @param {Object} catagories 
 * @param {Array} centerKeys 
 * @param {Array} selectedCatagories 
 */
const getSubCatagories = (catagories, centerKeys, selectedCatagories = []) => {
    switch (selectedCatagories.length) {
        case 0:
            return Object.entries(catagories).reduce((acc, [key, catagory]) => {
                centerKeys.forEach((centerKey) => {
                    if (catagory.centers.indexOf(centerKey) > -1) {
                        acc[key] = catagory.description;
                    }
                }, this);
                return acc;
            }, {});
        case 1:
        case 2:
            //c = last selected catagory 
            let c = selectedCatagories[0]
            return Object.entries(catagories[c].subCatagories).reduce((acc, [key, catagory]) => {
                centerKeys.forEach((centerKey) => {
                    if (catagory.centers.indexOf(centerKey) > -1) {
                        acc[key] = catagory.description;
                    }
                }, this);
                return acc;
            }, {});
        case 2:
        default:
            break;
    }
}

/**
 * 
 * @param {*} existingCatagories 
 * @param {*} newCatagory 
 */
const addCatagory = (existingCatagories, newCatagory) => {
    if (existingCatagories.indexOf(newCatagory) < 0) {
        existingCatagories.push(newCatagory);
    }
    return existingCatagories;
}

/**
 * 
 * @param {*} existingCatagories 
 */
const removeCatagory = (existingCatagories) => {
    existingCatagories.pop();
    return existingCatagories;
}

const getCenter = (centers, centerName) => {
    center = Object.values(centers).filter((center) => {
        return center.name === centerName
    })
    console.log('centerName ', centerName)
    console.log('center ', center)
    return center[0]
}

export { filterCentersByUser, filterCentersByCatagoryAndUser, getSubCatagories, addCatagory, removeCatagory, getCenter }