let name = "j breezy";
let age = 25;
let birthday = "may 27";
let detroitGC = "true";
let lifeEvents = ["born in adrian", "went to dexter high", "wass a chef", "joined Grand Circus"];
if (detroitGC === true) {
    console.log(`my name is ${name} and i am a student at grand circus in detroit, michigan. i am currently ${age} years old and my birthday is ${birthday}`)
} else {
    console.log(`my name is ${name} and i am a student at grand circus in Grand Rapids, michigan. i am currently ${age} years old and my birthday is ${birthday}`)
};
for (let i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i])
};
let counter = 0;
while (true) {
    let randomNumber = Math.floor(Math.random() * 11)
    if (randomNumber != 5) {
        counter++;
        console.log(`${randomNumber} !==5`);
    } else {
        counter++;
        console.log(`5===5. it took ${counter} iterations to randomly generate the number 5`);
        break;
    }
}