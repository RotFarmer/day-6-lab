let hours = 50;
let wage = 10;
let overtime = (hours - 40)
let pay = (wage * hours);
console.log(overtime);
let otPay = overtime * (wage * 1.5);
console.log(otPay);
if (hours >= 40) {
    hours = 40
    pay = wage * hours + otPay
    console.log(pay)
} else {
    console.log(pay)
};
let weeks = 1;
let total = pay;
while (true) {
    if (total < 1000000) {
        weeks++;
        total += pay;
        console.log(total);
    } else {
        break;
    }
}
console.log(`it took ${weeks} weeks to get to ${total} dollars`)