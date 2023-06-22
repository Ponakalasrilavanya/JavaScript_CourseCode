// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.
// GOOD LUCK �

const markObject = {
    firstName: 'Mark',
    mass: 78,
    height: 1.69,
    BMIValue: function () {
        return (this.mass / (this.height ** 2));
    }
}
const johnObject = {
    firstName: 'John',
    mass: 92,
    height: 1.95,
    BMIValue: function () {
        return (this.mass / (this.height * this.height));
    }
}
console.log(johnObject.BMIValue());
console.log(markObject.BMIValue());
console.log(`${johnObject.BMIValue() > markObject.BMIValue() ? `John's BMI ${johnObject.BMIValue()} is higher than Mark's ${markObject.BMIValue()}` : `Mark's BMI ${markObject.BMIValue()} is higher than John's ${johnObject.BMIValue()}`}`)


/*Second Way of write
    const markObject = {
    firstName: 'Mark',
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    BMIValue: function () {
        //return (this.mass / (this.height ** 2));
        this.bmi = (this.mass / (this.height ** 2));
        return this.bmi;
    }
}
const johnObject = {
    firstName: 'John',
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    BMIValue: function () {
        //return (this.mass / (this.height * this.height));
        this.bmi = (this.mass / (this.height ** 2));
        return this.bmi;
    }
}
console.log(johnObject.BMIValue());
console.log(markObject.BMIValue());
console.log(`Just using the Mark BMI instead of calling the property of object ${markObject.bmi}`);
console.log(`Just using the John BMI instead of calling the property of object ${johnObject.bmi}`);
//console.log(`${johnObject.BMIValue() > markObject.BMIValue() ? `John's BMI ${johnObject.BMIValue()} is higher than Mark's ${markObject.BMIValue()}` : `Mark's BMI ${markObject.BMIValue()} is higher than John's ${johnObject.BMIValue()}`}`)

console.log("Above i have used Ternary operator.Below is the second way of calling the object proprty which is actually a function");
if (markObject.bmi > johnObject.bmi) {
    console.log(`${markObject.fullName}'s BMI (${markObject.bmi}) is higher than ${johnObject.fullName}'s BMI (${johnObject.bmi})`);
} else if (johnObject.bmi > markObject.bmi) {
    console.log(`${johnObject.fullName}'s BMI (${johnObject.bmi}) is higher than ${markObject.fullName}'s BMI (${markObject.bmi})`);
}
*/
