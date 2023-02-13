let firfun=()=>{

    return new Promise((resolve,reject)=> {
    setTimeout(()=>{
        
        resolve("firfun  function is start executing")
    },10000)
}
)}

let secfun=()=>{
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            
            resolve("secfun function is start executing")
        },10000)
    }
    )}


let thirfun=()=>{
    
        setTimeout(()=>{
            
            console.log("thirfun function is start executing")
        },8000)
    }
    

firfun().then((resolve)=>{
    console.log(resolve);
    secfun().then((resolve)=>{
        console.log(resolve);
    });
    thirfun()  
})