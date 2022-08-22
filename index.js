let drivers = ['Ocon', 'Vettel', 'Max', 'Leclerc', 'Lewis', 'Yuki'];

function findMatching(drivers, name) {
    return drivers = drivers.filter(driver => driver  === name || driver == name.toLowerCase())
}


function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.indexOf(query) == 0)

}


function matchName(drivers, name){
    return drivers.filter(drivers => drivers.name === name);
}