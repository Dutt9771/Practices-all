var arr=[10,20,30,40,50,60,70,80,90,100];
var max = arr[0];
var sum =0;
var average=0;
for (var i=0;i<arr.length;i++){
    sum+= arr[i];
    if(arr[i]>max){
        max = arr[i];
    }
}

document.write("Array Element : "+ "["+arr+"]" + "<br>")
document.write("Total Sum = "+sum + "<br>");
document.write("Average of the Array Element =  " + sum/(arr.length-1) + "<br>")
document.write("Maximum value in the array Element = " + max);