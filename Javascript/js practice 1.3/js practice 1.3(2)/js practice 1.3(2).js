var arr = ['SQL', 'C#', 'C++', 'Python', 'JavaScript']
var largeststr = "";

for (let item of arr) {
    if (item.length > largeststr.length) {
        largeststr = item;
    }
}
document.write("Array Element = [" + arr + "]<br>")
document.write("Largest String  = ", largeststr)