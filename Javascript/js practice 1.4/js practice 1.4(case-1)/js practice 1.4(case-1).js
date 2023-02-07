
var aRR= ["<html>","<head>","</head>","<body>","<p>","this is test element","</br>","</p>","</body>","</html>"];

function htmlparser(array){
    for(var i=0;i<array.length;i++){
    if(array[i]=="<html>" && array[array.length-1]=="</html>"){
        document.write("Valid");
    }
    else{
        document.write("Invalid");    
    }
}
}
htmlparser(aRR)