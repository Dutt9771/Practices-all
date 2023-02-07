//Here Sorting the age 
var arr=[{
    firstName: 'John',
    lastName: 'Doe',
    age: 27,
    joinedDate: 'December 15, 2017'
},

{
    firstName: 'Ana',
    lastName: 'Rosy',
    age: 25,
    joinedDate: 'January 15, 2019'
},

{
    firstName: 'Zion',
    lastName: 'Albert',
    age: 30,
    joinedDate: 'February 15, 2011'
}];
let sortedage = arr.sort(
    
    function(r1,r2){
        if(r1.age>r2.age){
            return 1
        }
        else if(r1.age<r2.age){
            return -1
        }
        else{
            return 0;
        }
    }
)
console.log(sortedage)
