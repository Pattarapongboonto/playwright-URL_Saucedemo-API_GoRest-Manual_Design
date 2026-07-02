function removeDollar(price) {
    return Number(price.replace("$", ""));
}

function calculateTotal(price1, price2) {
    return price1 + price2;
}

module.exports = {
    removeDollar,
    calculateTotal
};