const readline = require(`readline-sync`);

let clientAge = Number(readline.question('Your age: '));
/**
 * <18: Not sell
 * 18 -> 55: Unlimited
 * > 55: 2 bottles
 * 
 * redundant logic: clientAge >=18 && clientAge <=55;
 * isAgeInRange = clientAge >=18 && clientAge <=55;
 * isStateEligible = true;
 * isAgeInRange = isStateEligible
 */

if (clientAge < 18) {
    console.log("Not sell");
    if(clientAge < 14){
        console.log("Call 911")
    }
} else if (clientAge <= 55)
    console.log("Unlimitted");
else {
    console.log("2 bottles")
}


/** Day 3
 * 
 */