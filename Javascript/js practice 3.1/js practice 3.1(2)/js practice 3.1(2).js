// Question 
// Create a web application that contains three async functions, 
// one that contains setTimeout with 5s with return statement as "output 
// from one"
// second that contains setTimeout with 10s with return statement as 
// "output from second"
// third that contains setTimeout with 15s with return statement as 
// "output from third"
// output should be display as following,
// output from one
// output from two
// output from third

async function firfun(){

    let one = new Promise((resolve,reject)=> {
     setTimeout(()=>{
        
        resolve(console.log("output from one"))
    },5000)
}
)
    
    let two = new Promise((resolve,reject)=> {
            setTimeout(()=>{
            
                resolve(console.log("output from Two"))
            },10000)
        })
    let three= new Promise((resolve,reject)=> {
    setTimeout(()=>{
        
        resolve(console.log("output from Three"))
    },15000)})
    
    let Oneawait=await one;
    let twowait=await two;
    let threeawait=await three;
    return Oneawait,twowait,threeawait
}

firfun().then((resolve)=>{
    
})