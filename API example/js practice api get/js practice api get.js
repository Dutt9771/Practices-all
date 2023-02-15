// var xhr= new XMLHttpRequest();
// xhr.open("GET","https://gorest.co.in/public/v2/users/733/posts",true);
// xhr.onreadystatechange= function(){
//     if(xhr.readyState===XMLHttpRequest.DONE){
//         console.log(xhr.responseText)
//     }
// }
// xhr.send()


var xhr= new XMLHttpRequest();
xhr.open("POST","https://gorest.co.in/public/v2/users",true);
xhr.setRequestHeader("Content-Type","application/json");
xhr.onreadystatechange= function(){
    if(xhr.readyState===XMLHttpRequest.DONE){
        console.log(xhr.responseText)
    }
}
xhr.send(JSON.stringify({ kry:"value" }));



