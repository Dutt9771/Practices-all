// A valid IP address consists of exactly four integers separated by single dots. Each integer is 
// between 0 and 255 (inclusive) and cannot have leading zeros.
// For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but "0.011.255.245", 
// "192.168.1.312" and "192.168@1.1" are invalid IP addresses.
// Given a string s containing only digits, return all possible valid IP addresses that can be formed 
// by inserting dots into s. You are not allowed to reorder or remove any digits in s. You may 
// return the valid IP addresses in any order.
// Example 1:
// Input: s = "25525511135"
// Output: ["255.255.11.135","255.255.111.35"]
// Example 2:
// Input: s = "0000"
// Output: ["0.0.0.0"]
// Example 3:
// Input: s = "101023"
// Output: 
// ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]


let str1 = "25525511135";
let str2 = "0000";
let str3 = "101023";

function validIp(str) {

    let arr = new Array()
    let temp = "";
    for (let i = 0; i < str.length; i++) {

        if (str[i] == ".") {
            arr.push(temp)
            temp = "";
        } else {

            temp = temp + str[i];
        }
    }

    arr.push(temp)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 3 || parseInt(arr[i]) > 255 || parseInt(arr[i]) < 0) {
            return 0;
        }
        if (arr[i].length > 1 && parseInt(arr[i]) == 0) {
            return 0;
        }
        if (arr[i].length > 1 && parseInt(arr[i]) != 0 && arr[i][0] == "0") {
            return 0
        }
    }
    return 1;

}

function strtoarr(str) {

    function containsSpecialChars(str) {
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;
        return specialChars.test(str);
    }
    let len = str.length;
    if (len > 12 || len < 4) {
        console.log("IP Address is Invalid")
    }
    let newstr = str;
    let newarr = new Array()

    for (let i = 1; i < str.length - 2; i++) {
        for (let j = i + 1; j < str.length - 1; j++) {
            for (let k = j + 1; k < str.length; k++) {
                newstr = newstr.substring(0, k) + "." + newstr.substring(k, newstr.length)
                newstr = newstr.substring(0, j) + "." + newstr.substring(j, newstr.length)
                newstr = newstr.substring(0, i) + "." + newstr.substring(i, newstr.length);
                if (containsSpecialChars(str) !== true) {
                    if (validIp(newstr)) {

                        newarr.push(newstr);
                        console.log(newstr);

                    }
                    newstr = str;
                } else {
                    return ("IP Address Is Invalid")
                }
            }
        }

    }
}

console.log(strtoarr(str1))
console.log(strtoarr(str2))
console.log(strtoarr(str3))