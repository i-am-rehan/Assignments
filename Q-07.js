"use strict";
//Program 1: Finding the Area of a Circle**
// This program calculates the area of a circle given its radius.
// Define the constant value of pi.
const pi = 3.14159;
// Function to calculate the area of a circle based on the radius.
function calculateCircleArea(radius) {
    return pi * radius * radius;
}
// Sample usage of the function to find the area of a circle with radius 5.
const radius = 5;
const area = calculateCircleArea(radius);
console.log(`The area of the circle with radius ${radius} is ${area}.`);
//Program 2: Converting Celsius to Fahrenheit**
// This program converts a temperature from Celsius to Fahrenheit.
// Function to convert Celsius to Fahrenheit.
function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}
// Sample usage of the function to convert 30 degrees Celsius to Fahrenheit.
const celsiusTemp = 30;
const fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
console.log(`${celsiusTemp} degrees Celsius is equal to ${fahrenheitTemp} degrees Fahrenheit.`);
