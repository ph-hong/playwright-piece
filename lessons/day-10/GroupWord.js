const givenStr = "Hello ban, tui ten Teo, ban cung ten Teo luon ah?";
let individualWorlds = givenStr.replace(/,/gi, "").split(" ");
const groupWords = groupWord(individualWorlds);
console.log(groupWords);

function groupWord(individualWorlds) {
    let wordMap = new Map();
    for (const word of individualWorlds) {
        if (!wordMap.has(word)) {
            wordMap.set(word, 1);
        } else {
            wordMap.set(word, wordMap.get(word) + 1)
        }
    }
    return wordMap;
}
