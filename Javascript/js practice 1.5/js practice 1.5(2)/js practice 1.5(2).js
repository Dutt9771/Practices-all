let firNums = [-1, 2, 1, -4];
let secNums = [3, 2, -4, -1];

function target(num, target) {
    arr = [];
    for (let i = 0; i < num.length; i++) {
        for (let j = i + 1; j < num.length; j++) {
            for (let k = j + 1; k < num.length; k++) {
                let sum = num[i] + num[j] + num[k];
                arr.push(sum)
                console.log(
                    "sum Of  i = " + i + " ,j = " + j + " ,k = " + k + " th Element" + sum
                );
            }
        }
    }

    console.log(arr);
    let newarr = arr.map((x) => {
        return x - target;
    })
    console.log(newarr);
    for (let i = 0; i < newarr.length; i++) {
        if (-1 <= newarr[i] && newarr[i] <= 1) {
            console.log("Output Is :", arr[i]);
        } else {
            continue;
        }
    }

}

target(firNums, 1)
target(secNums, -4)