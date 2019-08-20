function removeItem(data, item){
    const obj = data;

    if (!obj[item]){
        return {};
    }
    delete obj[item];
    return obj;
}

module.exports = removeItem;