const cart = ["shirt", "pant", "kurta", "shoes"];

createOrder(cart)
    .then(function (orderId) {
        console.log(orderId);
        return proceedToPay(orderId);
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
        return showOrderSummary(paymentInfo);
    })
    .then(function (orderSummary) {
        console.log(orderSummary);
        return updateWallet(1);
    })
    .then(function (walletUpdate) {
        console.log(walletUpdate);
    })
    .catch((err) => console.log(err.message));


function createOrder(cart) {
    return new Promise((resolve, reject) => {
        if (!validateCart(cart)) {
            reject("cart is not valid");
        } else {
            let orderId = 5363;
            resolve(orderId);
        }
    })
};

function validateCart(cart) {
    return cart.length > 0;
};

function proceedToPay(orderId) {
    return new Promise((resolve, reject) => {
        if (!orderId) {
            reject("payment is failed");
        } else {
            resolve("payment done successfully");
        }
    })
};

function showOrderSummary(paymentInfo) {
    return new Promise((resolve, reject) => {
        if (!paymentInfo) {
            reject("payment info is not valid");
        } else {
            resolve("order is created successfully");
        }
    })
};

function updateWallet(wallet = 1) {
    return new Promise((resolve, reject) => {
        if (!wallet) {
            reject("wallet is not valid");
        } else {
            resolve("wallet is updated successfully");
        }
    })
};

