let hours = 45;
let wage = 20;
let pay = wage * hours;
if (hours > 40) {
    wage * 1.5
    console.log(pay)
} else {
    console.log(pay)
};
let weeks = 1;
let total = pay;
while (total < 1000000) {
    weeks++;
    total += pay;
    console.log(total)
}
console.log(`it took ${weeks} weeks to get to ${total} dollars`)