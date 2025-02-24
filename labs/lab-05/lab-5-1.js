/**
 * Hello ban, tui ten Teo, ban cung cung ten Teo luon ah
 * --> output:
 * Hey: 1
 * ban: 2
 * tui: 1
 * ten: 2
 * Teo: 2
 * 1. Please solve the excersize for countWords by using object, not a Map (do NOT use Object.entries() method to get a map)
 * 2. The program need to allow user to input a sentence, not hard code (optional)
 */

const givenStr = "Hello ban, tui ten Teo, ban cung cung ten Teo luon ah";
let seperatedWords = givenStr.replace(/,/gi, "").split(" ");
const groupWords = groupWord(seperatedWords);
console.log(groupWords);

function groupWord(seperatedWords) {
    const groupWordObj = {};
    for (const word of seperatedWords) {
        if (!groupWordObj[word]) {
            groupWordObj[word] = 1
        } else {
            groupWordObj[word] += 1;
        }
    }
    return groupWordObj
}