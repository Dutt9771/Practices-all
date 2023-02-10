let str = "Ag415ga";
let strsec = "saippuakivikauppias";

let PalindromeStr = (string) => {
    let convertedNumber = string.toString();
    let convertlower = convertedNumber.toLowerCase();
    let reverseString = convertlower
        .split("")
        .reverse()
        .join("");

    return reverseString === convertlower
        ? "String is Palidrome"
        : "String is not Palidrome";

}
console.log(PalindromeStr(str))
console.log(PalindromeStr(strsec))