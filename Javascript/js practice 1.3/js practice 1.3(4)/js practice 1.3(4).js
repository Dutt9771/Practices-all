var arr = ['SQL', 'C#', 'C++','SQL','C++', 'Python', 'JavaScript','SQL','Python']
function deletedarr(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < i; j++) {
            if (array[i] == array[j]) {
                array.splice(i, 1);
            }

        }
    }
    console.log("Deleted Duplicate element in Array = [" + array + "]");
}
console.log("Array =[" + arr + "]<br>");
deletedarr(arr);

// console.log(new Set(arr));