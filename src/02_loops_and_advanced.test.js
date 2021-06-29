// BONUS!
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/split
describe("Write a function named \"isPal\" that detects if a given string is a palindrome. " +
    "It should return true when this is the case, false otherwise.", () => {

    const isPal = (s) => s.rev
    expect(isPal("")).toBeTruthy()
    expect(isPal("bee")).not.toBeTruthy()
    expect(isPal("sugus")).toBeTruthy()
})