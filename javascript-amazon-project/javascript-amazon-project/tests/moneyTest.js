import {formatCurrency} from "../scripts/utils/money.js";   

console.log("Running money formatCurrency tests...");
if(formatCurrency(12345) !== "$123.45") {
    console.log("formatCurrency test failed for 12345 cents");
}
else {
    console.log("formatCurrency test passed for 12345 cents");
}

if(formatCurrency(0) !== "$0.00") {
    console.log("formatCurrency test failed for 0 cents");
}
else {
    console.log("formatCurrency test passed for 0 cents");
}

if(formatCurrency(2000.5) !== "$20.01") {
    console.log("formatCurrency test failed for 2000.5 cents");
}
else {
    console.log("formatCurrency test passed for 2000.5 cents");
}

if(formatCurrency(-150) !== "$-1.50") {
    console.log("formatCurrency test failed for -150 cents");
}
else {
    console.log("formatCurrency test passed for -150 cents");
}