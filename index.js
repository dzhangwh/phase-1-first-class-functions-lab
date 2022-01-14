const returnFirstTwoDrivers = function (drivers) {
    let funcOne = drivers.slice(0,2)
    return funcOne
}

const returnLastTwoDrivers = function (drivers) {
    let funcTwo = drivers.slice(2,4)
    return funcTwo
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
    return function createFare (fare) { 
        let multiply = fare * integer
        return multiply
    }
}

const double = function fareDoubler(){
    createFareMultiplier()

}