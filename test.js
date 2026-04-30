// const cart = ["pen", "pencil", "rubber"]

// createOrder(cart)
//     .then(function (orderId) {
//         console.log(orderId);
//         return proceedToPayment(orderId);
//     })
//     .then(function (orderSummary) {
//         console.log(orderSummary);
//         return showorder(orderSummary);
//     })
//     .then(function (walletbalance) {
//         console.log(walletbalance);
//     })
//     .catch(function (err) {
//         console.log(err.message)
//     })


// function createOrder(cart) {
//     const pr = new Promise(function (resolve, reject) {

//         const orderId = 212629

//         if (orderId) {
//             resolve(orderId)
//         }
//     })
//     return pr;
// }

// function proceedToPayment(orderSummary) {
//     const pp = new Promise(function (resolve, reject) {

//         const orderSummary = "Ordered pen, pencil and shoe with amount of 250.";
//         if (orderSummary) {
//             resolve(orderSummary)
//         }
//     })
//     return pp;
// }

// function showorder() {
//     const pf = new Promise(function (resolve, reject) {
//         const walletbalance = 299;
//         if (walletbalance) {
//             resolve(walletbalance)
//         }
//     })
//     return pf;
// }

// setTimeout(function(){
//   console.log("timer");
// }, 1000) //first argument is call back function & second is timer.

// attachEventlist();

// function attachEventlist(){
//   let count = 0;
//   document.getElementById("click me").addEventListener("click", function xyz(){
//     console.log("Button clicked", ++count);
//   })
// }
// //---Higher order function
// function x(){
//   console.log("hi");
// }

// function y(x){
//   x();
// }
// y();

//y is a higher order function, x is a call back function

// const radius = [1,2,3,4];
// const calculateArea = function(radius){
//    const output=[];
//    for (i=0;i<radius.lenghth;i++){
//     output.push(Math.PI * radius[i] * radius[i])
//    }
//    return output;
// }
// console.log(calculateArea(radius));

// const radius =[1,2,3,4];
// const circumferenceArea = function(radius){
//   const output =[];
//   for(i=0;i<radius.length;i++){
//     output.push(2 * Math.PI * radius[i])
//   }
//   return output;
// }
// console.log(circumferenceArea(radius));



