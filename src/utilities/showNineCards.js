export default function showNineCards(cards) {
    let newCardList = [];
    for (let i = 0; i < 9; i++) {
        newCardList.push(cards[i]);
    }

    return newCardList;
}