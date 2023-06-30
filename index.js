function saturdayFun( roll= "roller-skate"){
    return `This Saturday, I want to ${roll}!`; 
}
function mondayWork( d= "go to the office"){
    return `This Monday, I will ${d}.`
}
function wrapAdjective(x="*"){
    return function(xx="special"){
        return `You are ${x}${xx}${x}!`
    }
} 