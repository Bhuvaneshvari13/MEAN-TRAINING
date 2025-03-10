function findMax(arr){
    return Math.max(...arr);
}
function removeDuplicates(arr){
    return [...new Set(arr)];
}
module.exports={
    findMax,
    removeDuplicates
}