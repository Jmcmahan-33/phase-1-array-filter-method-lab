// Code your solution here
// function findMatching(drivers,name) {
//     let newDriverArray = drivers.filter(name => name.toLowerCase() === drivers.toLowerCase())
//     return newDriverArray
// }

function findMatching(drivers, name) {
    return drivers.filter(match => match.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers,name) {
    return drivers.filter(match => match.slice(0,2) === name)
}

// function matchName(obj,name) {
//     return obj.filter(function(obj){
//         return obj.name === name
//     }) 
    
// }
   

function matchName(obj,name) {
    return obj.filter(match => match.name === name)
}