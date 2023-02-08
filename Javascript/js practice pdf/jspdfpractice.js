var arr= ['SQL', 'C#','C#','SQL', 'JavaScript','SQL','Python'];

arr.sort()
var count = 0 ;
function countArr(array) {
    
var newarr = [];
for(var i=0;i<array.length;i++){
    for(var j=0;j<i;j++){
        if(array[i]==array[j]){
            count++;
            newarr.push(array[j])
            newarr.push(count)
        }
    }
}
return count + newarr;

}
document.write(countArr(arr));