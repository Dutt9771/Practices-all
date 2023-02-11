let str="abc";

let arr=(string)=>{
    // let array=string.split("")
    // console.log(array)
    let array=[];
    for(let i=0;i<string.length;i++){
        array[i]=string[i];

    }
    console.log(array)
}
arr(str)