
var aRR= ['Java','Ruby','C#','C++','Kotlin','Dart','Python', 'JavaScript','SQL','Python'];

function sortarr(array) {
    var sortArr = array.sort();
    document.write("Sorted Array in Alphabetical Order =  [" + sortArr + "] ");
}
document.write("Array = [" + aRR + "]<br>");
sortarr(aRR);