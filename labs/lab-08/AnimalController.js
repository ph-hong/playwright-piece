class AnimalController {
    getWinner(animalList) {
        let winner = animalList[0];
        for (const animal of animalList) {
            if (animal.getSpeed() > winner.getSpeed()) {
                winner = animal;
            }
        }
        return winner;
    }
}

module.exports = AnimalController;


