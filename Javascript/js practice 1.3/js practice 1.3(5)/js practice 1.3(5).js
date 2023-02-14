var firstArr = ['SQL', 'C#', 'C++', 'SQL', 'C++'];
var secondArr = ['Python', 'JavaScript', 'SQL', 'Python'];

function deleteandconcate(farray, sarray) {
    var array = farray.concat(sarray);
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < i; j++) {
            if (array[i] == array[j]) {
                array.splice(i, 1);
            }

        }
    }
    document.write(
        "Deleted Duplicate Elements and Concat the Arrays =  [" + array + "] "
    );
}
document.write("First Array = [" + firstArr + "]<br>");
document.write("Second Array = [" + secondArr + "]<br>");
deleteandconcate(firstArr, secondArr);