var Obj = {
    name: "Dutt Mistry",
    Age: 21,
    address: "Baroda"
}

function newObject(Obj) {
    const Newobj = new Object();
    Newobj.name = Obj.name;
    Newobj.age = Obj.Age;
    document.write("name : " + Newobj.name + "<br>age : " + Newobj.age);
}
newObject(Obj);