function isPath(magic, dist, power, index, trip){
    if(index == magic.length && trip < magic.length){
        index =0;
    }
    if(trip == magic.length){
        if (power< 0) return -1;
        return 0;
    }
    
    const newPower = (magic[index] + power) - dist[index];
    return isPath(magic, dist, newPower, index+1, trip+1);
}

function getLowestStartIndex(magic, dist){
    let lowestIndex = 0;
    for (let i =0; i<magic.length; i++){
        if (magic[i] < dist[i]) {
            lowestIndex = -1;
        } else {
            lowestIndex = isPath(magic, dist,0, i, 0);
            if (lowestIndex != -1){
                return i;
            }
        }
    }
    return lowestIndex;
}


module.exports = getLowestStartIndex;