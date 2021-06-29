describe("Combine those two numbers (a and b) using the correct operator so the test passes.", () => {
    let a = 10
    let b = 2

    let res = 0 // Change this line

    expect(res).toBe(20)
})

describe("Concatenate those three strings together", () => {
    let a = "I"
    let b = "FEEL"
    let c = "ALIVE"

    let res = "" // Change this line

    expect(res).toBe("I FEEL ALIVE")
})

describe("Change the variable b so test passes", () => {
    let a = "I"
    let b = "FEEL" // Change this line

    expect(a === b).toBeTruthy()
})

// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
describe("Write a little program that converts a temperature of 140° fahrenheit to celsius.", () => {
    // write your code here and assign your result to the variable "result"

    expect(result).toBe(60)
})

describe("Write function called \"mult\" that takes two numbers as an argument and divides the first number by the" +
    " second and return the result of said division." +
    "If the second number is zero then just return 0." +
    "If the two numbers are the same, then multiply them together instead.", () => {
    // Write your code here

    expect(mult(1, 0)).toBe(0)
    expect(mult(100, 10)).toBe(10)
    expect(mult(10, 10)).toBe(100)
})
