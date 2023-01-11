// code your solution here
function saturdayFun(string = 'roller-skate'){
    return `This Saturday, I want to ${string}!`;
} 

function mondayWork(string = 'go to the office'){
    return `This Monday, I will ${string}.`
}

function wrapAdjective(style = "*") {
    return function (adjective = "special") {
        return `You are ${style}${adjective}${style}!`
    }
}

