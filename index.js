function saturdayFun(activity = "roller-skate") {
   return `This Saturday, I want to ${activity}!`
};

const mondayWork = function (mondayActivity = "go to the office") {
    return `This Monday, I will ${mondayActivity}.`
};

// function wrapAdjective() {
//     return function theChild(loneParameter = "special") {
//                 return `You are ${loneParameter}!`
//         };
// };

function wrapAdjective(flare = "*") {
    return function(adj) {
        return `You are ${flare}${adj}${flare}!`
    };
}
