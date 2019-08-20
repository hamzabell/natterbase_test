function validateInput(dataObject, rules) {
    const keys = Object.keys(dataObject);
    const missingFields = [];

    keys.forEach(element => {
        if (!rules.includes(element)){
            missingFields.push(element);
        }
    });
    return missingFields;
}

module.exports = validateInput;