// Create HTML parser using Array. Input and Output should as following.
// Example 1:
// Input: <html><head></head><body></body></html>
// Output: Valid
// Example 2:
// Input: <html><head></head><body></boy></html>
// Output: Invalid
// Example 3: 
// Input: <html><head></head><body><p>this is test 
// element</p></body></html>
// Output: Valid
// Example 4: 
// Input: <html><head></head><body><p>this is test 
// element</br></p></body></html>
// Output: Valid
let str = "<html><head></head><body><br/></body></html>";
let str1 = "<html><head></head><body></boy></html>";
let str2 = "<html><head></head><body><p>this is test element</p></body></html>";
let str3 = "<html><head></head><body><p>this is test element<br/></p></body></html>";

function validation(str) {
    if (str && str.length > 0) {
        let arr = [];
        let i = 0;

        while (i < str.length - 1) {
            if (str[i] === '<') {
                let j = i + 1;
                let temp = "";
                while (j < str.length && str[j] !== ">") {
                    temp += str[j];
                    j++;
                }

                if (temp[temp.length - 1] == "/") {
                    i = j + 1;
                    continue;
                }

                if (temp.startsWith("/") && arr.length > 0) {
                    let popedElement = arr.pop();
                    // console.log("Poped = ", popedElement); console.log("Temp = ",
                    // temp.substring(1));
                    if (temp.substring(1) !== popedElement) {
                        return "Invalid String";
                        break;
                    }

                } else {
                    arr.push(temp);
                }
                i = j + 1;
            } else {
                i++;
            }
        }

        if (arr.length == 0) {
            return "Valid String";
        }
    }
}

console.log(validation(str));
console.log(validation(str1))
console.log(validation(str2))
console.log(validation(str3))
